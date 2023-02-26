import * as yup from "yup";

export const newDocSchema = yup.object().shape({
  driver: yup.number().typeError("Must be a number").required("Required"),
  title: yup
    .string()
    .max(255, "Shorter than 255 characters")
    .required("Required"),
  expiry: yup.date().required("Required"),
  renovation_alert: yup.number().typeError("Must be a number"),
});
