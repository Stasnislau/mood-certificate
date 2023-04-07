/* eslint-disable react/no-unescaped-entities */

import { Box, Button, Grid, Paper, Typography } from "@mui/material";

function IntroPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Box
            component="img"
            sx={{ p: 2 }}
            alt="Mood"
            src="../../public/moods.svg"
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Mood Checker
          </Typography>

          <Typography variant="body1" gutterBottom>
            This application helps you understand your current mood.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The best part is that you can check if you understand your mood
            correctly.
          </Typography>
          <Typography variant="body1" gutterBottom>
            To do this, you need to enter your name and surname.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Also, do not forget to give us what you think your mood is.
          </Typography>
          <Typography variant="body1" gutterBottom>
            After that, you just wait and see what the result will be.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Good luck!
          </Typography>
          <Button variant="contained" href="/registration">
            Start
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default IntroPage;
