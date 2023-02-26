import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { newDocSchema } from "../validations/vehicleDocumentation";

function EditDocModal({ isOpen, toggle, doc }) {
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    axios
      .put(`http://localhost:8000/vehicle-docs/${doc.id}/`, values)
      .then((resp) => {
        actions.resetForm();
        navigate(0);
      })
      .catch((err) => console.error(err));
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      vehicle: doc.vehicle,
      title: doc.title,
      expiry: doc.expiry,
      renovation_alert: doc.renovation_alert,
    },
    validationSchema: newDocSchema,
    onSubmit: onSubmit,
  });

  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-500 flex flex-col text-neutral-700"
      >
        <h1 className="text-4xl mb-6 font-bold">Edit documentation</h1>
        <div className="mb-4">
          <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
            Title
          </p>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-2 rounded-lg bg-neutral-200 w-full
              ${
                errors.title &&
                touched.title &&
                `border-red-500 border-2
                 focus:border-red-500 focus:outline-none`
              }`}
            placeholder="Permiso Nacional de Conduccion"
          />
          {errors.title && touched.title && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.title}</p>
          )}
        </div>
        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Expiry date{" "}
              <span className="font-normal text-neutral-400">
                <br /> (yyyy-mm-dd)
              </span>
            </p>
            <input
              type="text"
              name="expiry"
              value={values.expiry}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 w-52
                ${
                  errors.expiry &&
                  touched.expiry &&
                  `border-red-500 border-2
                   focus:border-red-500 focus:outline-none`
                }`}
              placeholder="YYYY-MM-DD"
            />
            {errors.expiry && touched.expiry && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.expiry}</p>
            )}
          </div>

          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Renovation alert{" "}
              <span className="font-normal text-neutral-400">
                <br /> (days before)
              </span>
            </p>
            <input
              type="text"
              name="renovation_alert"
              value={values.renovation_alert}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 w-32
                ${
                  errors.renovation_alert &&
                  touched.renovation_alert &&
                  `border-red-500 border-2
                   focus:border-red-500 focus:outline-none`
                }`}
              placeholder="45"
            />
            {errors.renovation_alert && touched.renovation_alert && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.renovation_alert}
              </p>
            )}
          </div>
        </div>
        <div className="flex mt-6">
          <button
            type="submit"
            className="mr-4 px-4 py-2 rounded-xl bg-blue-400 text-neutral-50
              border-2 border-blue-400 hover:text-blue-400 font-bold
              hover:bg-neutral-50"
          >
            Modify
          </button>
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-400 text-neutral-50
              hover:bg-neutral-50 border-2 border-neutral-400 font-bold
              hover:text-neutral-500"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
      {isSubmitting && <Loading />}
    </div>
  );
}

export default EditDocModal;
