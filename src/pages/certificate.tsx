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
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Certificate of Completion
            </Typography>

            <Box sx={{ mb: 4 }}>
              <img
                src={state.photo}
                alt={state.name}
                style={{ width: "100%" }}
              />
            </Box>

            <Typography variant="body1" gutterBottom>
              This certificate is awarded to {`${state.name} ${state.surname}`}{" "}
              for completing the Mood Checker survey on{" "}
              {`${state.dateOfSurvey}, ${state.timeOfSurvey}.`}
            </Typography>

            <Typography variant="body1" gutterBottom>
              According to our system, {`${state.name}`} was feeling{" "}
              {`${state.discoveredMood}`} during the survey. {`${state.name}`}{" "}
              also indicated that they were feeling {`${state.predictedMood}`}{" "}
              at the time of the check.
            </Typography>

            <Typography variant="body1" gutterBottom>
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
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                textTransform: "uppercase",
                mt: 4,
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
