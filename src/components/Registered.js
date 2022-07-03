import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { StyledTypography } from "../styles/StyledTypography";
import { StyledPaper } from "../styles/StyledPaper";

const Registered = () => {
  return (
    <Grid container item sx={{ justifyContent: "center", mt: "200px" }}>
      <StyledPaper>
        <Grid item alignSelf="center">
          <StyledTypography variant="h5" color="initial">
            Thank You For Your Registation, You Are Now Registered!
          </StyledTypography>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default Registered;
