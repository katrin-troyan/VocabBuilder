import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must contain '@' and be valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must contain '@' and be valid"),
  password: yup.string().required("Password is required"),
});
