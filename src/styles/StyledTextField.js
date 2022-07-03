import { TextField } from "@mui/material";
import { styled } from "@mui/material";

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  borderColor: "black",
  color: "black",
  fontWeight: "bold",
  marginTop: "5px",
  marginBottom: "5px",
});
