import * as yup from 'yup';

export const SchemaShape = {
  name: yup.string().required("Please enter your name"),
  email: yup.string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  password: yup.string().min(12).required("Your password must be at least 12 characters long"),
  terms: yup.bool().oneOf([true], "Please read and accept the Terms & Conditions")
}
