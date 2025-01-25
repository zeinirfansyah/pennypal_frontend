import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  fullname: Yup.string().required("This field is required."),
  username: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(20, "Maximum 20 characters")
    .matches(/^[a-zA-Z0-9-_.]+$/, "Username is invalid.")
    .required("This field is required."),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("This field is required."),
  phone: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed.")
    .min(10, "Minimal 10 characters")
    .max(13, "Maximum 13 characters")
    .required("This field is required."),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .required("This field is required."),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("This field is required."),
});
