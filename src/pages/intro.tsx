import { Box, Button, Grid, Paper, Typography } from "@mui/material";

function IntroPage() {
  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2, fontFamily: "Montserrat" }}>
            Welcome to the Mood Checker
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
              mb: 2,
            }}
            alt="Mood"
            src="moods.svg"
          />

          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            This application helps you understand your current mood.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            The best part is that you can check if you understand your mood
            correctly.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            To do this, you need to enter your name and surname.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            Also, do not forget to give us what you think your mood is.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            After that, you just wait and see what the result will be.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
            Good luck!
          </Typography>
          <Button
            variant="contained"
            href="/registration"
            sx={{ fontFamily: "Montserrat" }}
          >
            Start
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default IntroPage;
