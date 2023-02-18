import * as yup from "yup";

export const userSchema = yup.object().shape({
  license_plate: yup.string().max(15).required("Required"),
  model: yup.string().max(63).required("Required"),
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
