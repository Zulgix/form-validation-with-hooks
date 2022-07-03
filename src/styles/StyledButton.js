import { Button } from "@mui/material";
import { styled } from "@mui/material";

const StyledButton = styled(Button, {
  name: "StyledButton",
})({
  backgroundColor: "#FFFF",
  width: "100%",
  height: "50px",
  padding: "10px",
  border: "solid",
  borderRadius: "5px",
  borderColor: "black",
  background: "#3F72AF",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  marginTop: "15px",
  marginBottom: "30px",
});
export default StyledButton;
