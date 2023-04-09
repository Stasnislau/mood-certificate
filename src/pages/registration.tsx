import * as Yup from "yup";

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

import { Context } from "../pages/_app.tsx";
import { useContext } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Registration = () => {
  const { state } = useContext(Context);
  interface FormValues {
    name: string;
    surname: string;
    predictedMood: string;
  }
  const router = useRouter();
  const initialValues = {
    name: state.name,
    surname: state.surname,
    predictedMood: state.predictedMood,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    predictedMood: Yup.string().required("Required"),
  });
  const onSubmit = (values: FormValues) => {
    state.name = values.name;
    state.surname = values.surname;
    state.predictedMood = values.predictedMood;
    router.push("/camera-frame");
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
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
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h3" sx={{ mb: 2, fontFamily: "Montserrat" }}>
              Let&apos;s get the party started!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
              Please enter your name and surname
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="surname"
                  name="surname"
                  label="Surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.surname && formik.errors.surname
                  )}
                  helperText={formik.touched.surname && formik.errors.surname}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
              What do you think your mood is?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="predictedMood"
                  name="predictedMood"
                  label="Mood"
                  value={formik.values.predictedMood}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.predictedMood && formik.errors.predictedMood
                  )}
                  helperText={
                    formik.touched.predictedMood && formik.errors.predictedMood
                  }
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              sx={{
                fontFamily: "Montserrat",
                mt: 2,
                bgcolor: "#5f5f5f",
                color: "#f9f9f9",
              }}
            >
              Let&apos;s Check!
            </Button>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};

export default Registration;
