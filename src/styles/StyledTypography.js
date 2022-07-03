import { Typography } from "@mui/material";
import { styled } from "@mui/material";

export const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})({
  color: "black",
  fontWeight: "bold",
});

export const ErrorTypography = styled(StyledTypography, {
  name: "ErrorTypography",
  slot: "Wrapper",
})({
  variant: "h6",
  backgroundColor: "red",
  fontWeight: "bold",
  fontSize: "18px",
});
