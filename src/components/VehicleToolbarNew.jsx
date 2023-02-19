import axios from "axios";
import React from "react";

import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { newUserSchema } from "../validations/User";

function VehicleToolbarNew() {
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    axios
      .post("http://localhost:8000/vehicles/", values)
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
      license_plate: "",
      model: "",
      status: "",
      usage: "",
      usage_type: "",
      notes: "",
    },
    validationSchema: newUserSchema,
    onSubmit: onSubmit,
  });

  const usageTypes = [
    { apiName: 0, humanName: "--" },
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hrs" },
  ];

  const statuses = [
    { apiName: 0, humanName: "Select a status" },
    { apiName: "AC", humanName: "Active" },
    { apiName: "MA", humanName: "Maintenance" },
    { apiName: "TA", humanName: "Repairs" },
    { apiName: "IN", humanName: "Inactive" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="container w-full mt-8 pb-6 flex flex-col space-y-2"
    >
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <label
            htmlFor="license_plate"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            License
          </label>
          <input
            type="text"
            name="license_plate"
            value={values.license_plate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             w-40 focus:border-transparent focus:outline-none
             ${
               errors.license_plate &&
               touched.license_plate &&
               "border-red-500 border-2"
             }`}
            placeholder="SOF1696"
          />
          {errors.license_plate && touched.license_plate && (
            <p className="text-xs text-red-500 mt-1 ml-2">
              {errors.license_plate}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="model" className="ml-2 mb-1 text-sm text-neutral-600">
            Model
          </label>
          <input
            type="text"
            name="model"
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none
             ${errors.model && touched.model && "border-red-500 border-2"}`}
            placeholder="Scania P410X"
          />
          {errors.model && touched.model && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.model}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Status
          </label>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-6 py-2 rounded-lg bg-neutral-200
             text-neutral-800 hover:bg-neutral-300
             ${errors.status && touched.status && "border-red-500 border-2"}`}
          >
            {statuses.map((item) => {
              return (
                <option key={item.apiName} value={item.apiName}>
                  {item.humanName}
                </option>
              );
            })}
          </select>
          {errors.status && touched.status && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.status}</p>
          )}
        </div>
      </div>
      <div className="relative flex space-x-10">
        <div className="flex flex-col">
          <label htmlFor="usage" className="ml-2 mb-1 text-sm text-neutral-600">
            Usage
          </label>
          <div className="flex relative">
            <input
              type="text"
              name="usage"
              value={values.usage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-1 rounded-l-lg bg-neutral-200
                 text-neutral-800 placeholder:text-neutral-500
                 w-48 focus:border-transparent focus:outline-none
                 ${errors.usage && touched.usage && "border-red-500 border-2"}`}
              placeholder="Usage in km or h"
            />
            <select
              name="usage_type"
              value={values.usage_type}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-6 py-1 rounded-r-lg bg-neutral-200
             text-neutral-800 hover:bg-neutral-300 border-l-2 border-neutral-300
             ${
               errors.usage_type &&
               touched.usage_type &&
               "border-red-500 border-2"
             }`}
            >
              {usageTypes.map((item) => {
                return (
                  <option key={item.apiName} value={item.apiName}>
                    {item.humanName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between">
            {errors.usage && touched.usage && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.usage}
              </p>
            )}
            {errors.usage_type && touched.usage_type && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.usage_type}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute bottom-0 right-0 py-4 px-4 rounded-full bg-red-300 hover:bg-red-400"
          >
            <BsPlusLg />
          </button>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Notes
          </label>
          <div className="flex">
            <input
              type="text"
              name="notes"
              value={values.notes}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-1 w-full rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-500
               focus:border-transparent focus:outline-none
               ${errors.notes && touched.notes && "border-red-500 border-2"}`}
              placeholder="Add custom notes here..."
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default VehicleToolbarNew;
