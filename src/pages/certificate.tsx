import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { Context } from "../pages/_app.tsx";
import { useContext } from "react";

const Certificate = () => {
  const { state } = useContext(Context);
  console.log(state);
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Certificate
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="img"
              src={state.photo}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              This certificate is awarded to {state.name} {state.surname}. At{" "}
              {state.timeOfSurvey} {state.dateOfSurvey} this person has
              completed the Mood Checker survey. The result of the survey was{" "}
              {state.predictedMood}.{state.name} indicated that they were{" "}
              {state.predictedMood} at the time of the survey. When according to
              our system {state.name} was {state.predictedMood}. We hereby
              certify that this person completed it fair and square. Therefore,
              the results of the survey are valid.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Certificate;
