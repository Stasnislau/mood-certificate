import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { Context } from "../pages/_app.tsx";
import { LoadingButton } from "@mui/lab";
import Webcam from "react-webcam";
import { uploadImage } from "@/services/picture.service";
import { useRouter } from "next/router";

const CameraFrame = () => {
  const { state } = useContext(Context);
  const router = useRouter();
  const [photoSrc, setPhotoSrc] = useState<string | undefined>(undefined);
  const webcamRef = React.useRef<Webcam>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!state.name || !state.surname || !state.predictedMood) {
      router.push("/registration");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCapture = React.useCallback(() => {
    try {
      const photo = webcamRef.current?.getScreenshot();
      if (!webcamRef.current) {
        throw new Error("Webcam is not initialized");
      }
      if (!photo) {
        throw new Error("Photo is not captured");
      }

      setPhotoSrc(photo);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  }, [webcamRef, setPhotoSrc]);

  function dataURLtoBlob(dataurl: string) {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  const handleSubmit = async () => {
    // send request to backend to get mood
    if (!photoSrc) {
      setError("No photo to submit");
      return;
    }
    try {
      setIsLoading(true);
      const response = await uploadImage(dataURLtoBlob(photoSrc));
      const data = await response;
      state.discoveredMood = data.mood;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    state.dateOfSurvey = new Date().toLocaleDateString();
    state.timeOfSurvey = new Date().toLocaleTimeString();
    state.photo = photoSrc;
    router.push("/certificate");
  };

  const handleDownload = () => {
    if (!photoSrc) return;
    const link = document.createElement("a");
    link.download = "captured-photo.png";
    link.href = photoSrc;
    link.click();
  };

  const handleRetake = () => {
    setPhotoSrc(undefined);
    setError(null);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "100vh", backgroundColor: "#f9f9f9" }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2, fontFamily: "Montserrat" }}>
            Now prepare your beautiful face!
          </Typography>
          {!photoSrc && (
            <>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ mb: 2, textAlign: "center" }}
              >
                Please, take a photo of yourself
              </Typography>
              {isCameraOn && (
                <Webcam
                  audio={false}
                  width="100%"
                  height="300px"
                  ref={webcamRef}
                  screenshotFormat="image/png"
                />
              )}
              {error && (
                <Typography variant="body1" color="error" sx={{ mb: 2 }}>
                  Error: {error}
                </Typography>
              )}
              <Grid
                container
                spacing={0}
                sx={{ mb: 2, display: "flex", justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  md={3.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {!isCameraOn && (
                    <Button
                      variant="contained"
                      onClick={() => setIsCameraOn(true)}
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Run the camera
                    </Button>
                  )}
                  {isCameraOn && (
                    <Button
                      variant="contained"
                      onClick={handleCapture}
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Take Photo
                    </Button>
                  )}
                </Grid>
              </Grid>
            </>
          )}
          {photoSrc && (
            <>
              <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                Here is your captured photo:
              </Typography>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  mb: 2,
                }}
                src={photoSrc}
              />
              <Grid container direction="row" spacing={2} sx={{ mb: 2 }}>
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleDownload}
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    Download
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <LoadingButton
                    variant="contained"
                    onClick={handleSubmit}
                    loading={isLoading}
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    Submit
                  </LoadingButton>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleRetake}
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    Retake
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CameraFrame;
