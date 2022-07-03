import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formValues: { username: "", email: "", password: "", confirmPassword: "" },
  isSubmitted: false,
};
const formSlice = createSlice({
  name: "formSlice",
  initialState,

  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    setisSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});
export const formActions = formSlice.actions;

export default formSlice.reducer;
