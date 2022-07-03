import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../redux/form-slice";

const useForm = (formValidation) => {
  const values = useSelector((state) => state.form.formValues);
  const isSubmitted = useSelector((state) => state.form.isSubmitted);
  const dispatch = useDispatch();
  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(formActions.setFormValues({ ...values, [name]: value }));
    //  setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = formValidation(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(formActions.setisSubmitted(true));
    }

    // setIsSubmitting(true);
    console.log(values);
  };

  return { handleChange, values, errors, handleSubmit };
};
export default useForm;

//callback = () => {}
