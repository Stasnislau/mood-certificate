import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import CertificatePDF from "../components/certificatePDF";
import { Context } from "../pages/_app";
import { useRouter } from "next/router";

const Certificate = () => {
  const router = useRouter();
  const [client, setClient] = useState(false);
  const { state } = useContext(Context);
  useEffect(() => {
    if (
      !state.name ||
      !state.surname ||
      !state.photo ||
      !state.dateOfSurvey ||
      !state.timeOfSurvey ||
      !state.discoveredMood ||
      !state.predictedMood
    ) {
      router.push("/registration");
    }
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 700 }}>
          <Grid item xs={12} id="certificate">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                color: "#2c3e50",
                mb: 2,
              }}
            >
              Certificate of Completion
            </Typography>
            <Box
              component="img"
              sx={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "contain",
                mb: 2,
              }}
              src={state.photo}
            ></Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "18px",
                mb: 2,
              }}
            >
              This certificate is awarded to {`${state.name} ${state.surname}`}{" "}
              for completing the Mood Checker survey on{" "}
              {`${state.dateOfSurvey}, ${state.timeOfSurvey}.`}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "18px",
                mb: 2,
              }}
            >
              According to our system, {`${state.name}`} was feeling{" "}
              <strong>{`${state.discoveredMood}`}</strong> during the survey.{" "}
              {`${state.name}`} also indicated that they were feeling{" "}
              <strong>{`${state.predictedMood}`}</strong> at the time of the
              check.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "18px",
                mb: 4,
              }}
            >
              We hereby certify that this person completed the survey fairly and
              that the results of the survey are valid.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setClient(true);
              }}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                textTransform: "uppercase",
                mt: 4,
                borderRadius: "20px",
                background: "#3498db",
                "&:hover": {
                  background: "#2980b9",
                },
              }}
            >
              {client ? <CertificatePDF {...state} /> : "Download Certificate"}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Certificate;
