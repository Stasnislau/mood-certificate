import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

const Registration = () => {

  const initialValues = {
    name: "",
    surname: "",
    predictedMood: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    predictedMood: Yup.string().required("Required"),
  });
  return (
    <div>
      <h1>Registration</h1>
    </div>
  );
};

export default Registration;