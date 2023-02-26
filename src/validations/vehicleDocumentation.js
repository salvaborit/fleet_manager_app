import * as yup from "yup";

export const newDocSchema = yup.object().shape({
  vehicle: yup.number().typeError("Must be a number").required("Required"),
  title: yup
    .string()
    .max(255, "Shorter than 255 characters")
    .required("Required"),
  expiry: yup
    .date()
    .typeError("Must be in the correct format")
    // .test("valid-date", "Invalid date", (val) => {
    // })
    .required("Required"),
  renovation_alert: yup
    .number()
    .typeError("Must be a number")
    .required("Required"),
});
