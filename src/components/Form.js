import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormRegister from "./FormRegister";
import Registered from "./Registered";

const Form = ({ inputs }) => {
  const isSubmitted = useSelector((state) => state.form.isSubmitted);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Grid container item className="formContainer" justifyContent="center">
      {!isSubmitted ? <FormRegister inputs={inputs} /> : <Registered />}
    </Grid>
  );
};

export default Form;
