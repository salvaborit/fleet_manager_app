import * as yup from "yup";

export const newUserSchema = yup.object().shape({
  license_plate: yup
    .string()
    .max(15, "Less than 15 characters")
    .required("Required"),
  model: yup.string().max(63, "Less than 63 characters").required("Required"),
  status: yup
    .string()
    .oneOf(["AC", "MA", "TA", "IN"], "Select status")
    .required("Required"),
  usage: yup
    .number()
    .integer()
    .positive()
    .typeError("Usage must be a number")
    .required("Required"),
  usage_type: yup
    .string()
    .oneOf(["KM", "HR"], "Select usage type")
    .required("Required"),
  notes: yup.string(),
});

export const userFilterSchema = yup.object().shape({
  license_plate: yup.string().max(15, "Less than 15 characters"),
  model: yup.string().max(63, "Less than 63 characters"),
  status: yup.string(),
  min_usage: yup.number().integer().positive().typeError("Must be a number"),
  max_usage: yup.number().integer().positive().typeError("Must be a number"),
  usage_type: yup.string(),
  notes: yup.string(),
});
