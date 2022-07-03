import { Grid } from "@mui/material";
import "./App.css";
import Form from "./components/Form";
import Inputs from "./inputsObj/Inputs";

function App() {
  return (
    <Grid container>
      <Form inputs={Inputs} />
    </Grid>
  );
}

export default App;
