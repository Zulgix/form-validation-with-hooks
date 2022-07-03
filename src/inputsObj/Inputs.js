import useForm from "../components/customHooks/useForm";

import React from "react";

// const Inputs = () => {
//   const { handleChange, values } = useForm();
//   return <div>Inputs</div>;
// };

const Inputs = [
  {
    id: "1",
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    onChange: "handleChange",
  },
  {
    id: "2",
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    onChange: "handleChange",
  },
  {
    id: "3",
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    onChange: "handleChange",
  },
  {
    id: "4",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
  },
];

export default Inputs;
