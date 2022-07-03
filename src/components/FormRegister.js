import React from "react";
import useForm from "./customHooks/useForm";
import formValidation from "./formValidation";
import { Grid, Input, Paper, TextField, Typography } from "@mui/material";
import StyledButton from "../styles/StyledButton";
import { StyledPaper } from "../styles/StyledPaper";
import RadioButtons from "./RadioButtons";
import {
  StyledGridColumn,
  StyledInputsContainer,
} from "../styles/StyledGridColumn";
import { StyledTypography } from "../styles/StyledTypography";
import { StyledTextField } from "../styles/StyledTextField";

const FormRegister = ({ inputs }) => {
  const { handleChange, values, handleSubmit, errors } =
    useForm(formValidation);

  return (
    <Grid
      container
      item
      sx={{
        mt: 2,
        mb: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        flexWrap: "nowrap",
      }}
    >
      <StyledPaper elevation={12}>
        <form onSubmit={handleSubmit}>
          <StyledGridColumn container item>
            <Grid item justifySelf="center" sx={{ mt: 2, mb: 2 }}>
              <StyledTypography variant="h5">Register</StyledTypography>
            </Grid>
            <StyledInputsContainer>
              {inputs.map((input) => (
                <Grid item key={input.id}>
                  <StyledTextField
                    variant="outlined"
                    id={input.id}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={values[input.name]}
                    onChange={handleChange}
                    error={errors[input.name]}
                    helperText={errors[input.name]}
                  />
                </Grid>

                /* <Grid item xs={12}>
                  {errors[input.name] && (
                    <Typography variant="h10" color="red">
                      {errors[input.name]}
                    </Typography>
                  )} 
                </Grid>*/
              ))}
            </StyledInputsContainer>
            <Grid item justifySelf="center">
              <RadioButtons />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit">Submit</StyledButton>
            </Grid>
          </StyledGridColumn>
        </form>
      </StyledPaper>
    </Grid>
  );
};

export default FormRegister;
