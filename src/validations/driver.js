import * as yup from "yup";

export const newDriverSchema = yup.object().shape({
  first_name: yup
    .string()
    .max(63, "Less than 63 characters")
    .required("Required"),
  last_name: yup
    .string()
    .max(63, "Less than 63 characters")
    .required("Required"),
  address: yup
    .string()
    .max(255, "Less than 255 characters")
    .required("Required"),
  email: yup
    .string()
    .email("Must be an email address")
    .max(127, "Less than 127 characters")
    .required("Required"),
  phone: yup
    .number()
    .max(31, "Less than 31 characters")
    .typeError("Must be a number")
    .required("Required"),
  birthdate: yup.date().required("Required"),
  id_type: yup
    .string()
    .oneOf(["CI", "PA"], "Select ID type")
    .required("Required"),
  id_number: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphanumeric characters are allowed")
    .required("Required"),
});

export const driverFilterSchema = yup.object().shape({
  first_name: yup.string().max(63, "Less than 63 characters"),
  last_name: yup.string().max(63, "Less than 63 characters"),
  address: yup.string().max(255, "Less than 255 characters"),
  email: yup.string().max(127, "Less than 127 characters"),
  phone: yup.string().max(31, "Less than 31 characters"),
  birthdate: yup.date(),
  id_type: yup.string(),
  id_number: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphanumeric characters are allowed"),
});
