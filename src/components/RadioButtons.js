import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButtons() {
  const [radioButtonValue, setRadioButtonValue] = React.useState("female");

  const handleChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="gender-radio-buttons">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender-radio-buttons"
        name="gender-radio-buttons"
        value={radioButtonValue}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons;
