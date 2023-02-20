import { useNavigate } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";

import { BsSearch } from "react-icons/bs";

import { userFilterSchema } from "../validations/User";

function VehicleToolbarFilters({ fetchFilteredData }) {
  const navigate = useNavigate();

  const usageTypes = [
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hrs" },
  ];

  const statuses = [
    { apiName: "AC", humanName: "Active" },
    { apiName: "MA", humanName: "Maintenance" },
    { apiName: "TA", humanName: "Repairs" },
    { apiName: "IN", humanName: "Inactive" },
  ];

  function onSubmit(values) {
    fetchFilteredData(values);
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
      usage_type: "",
      min_usage: "",
      max_usage: "",
    },
    validationSchema: userFilterSchema,
    onSubmit: onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
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
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             w-40 focus:border-transparent focus:outline-none
             ${
               errors.license_plate &&
               touched.license_plate &&
               "border-red-500 border-2"
             }`}
            placeholder="SOF1696..."
          />
          {errors.license_plate && touched.license_plate && (
            <p className="text-xs text-red-500 mt-1 ml-2">
              {errors.license_plate}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Model
          </label>
          <input
            type="text"
            name="model"
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none
             ${errors.model && touched.model && "border-red-500 border-2"}`}
            placeholder="Scania P410X.."
          />
          {errors.model && touched.model && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.model}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Status
          </label>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-6 py-2 rounded-lg bg-neutral-100
             text-neutral-800 hover:bg-neutral-300
             ${errors.status && touched.status && "border-red-500 border-2"}`}
          >
            <option value="">Select a status</option>

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
      <div className="flex flex-col">
        <label htmlFor="license" className="ml-2 mb-1 text-sm text-neutral-600">
          Usage
        </label>
        <div className="flex space-x-4 relative">
          <div className="flex space-x-2">
            <input
              type="text"
              name="min_usage"
              value={values.min_usage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-1 rounded-lg bg-neutral-100
               text-neutral-800 placeholder:text-neutral-500
               w-48 focus:border-transparent focus:outline-none
               ${
                 errors.min_usage &&
                 touched.min_usage &&
                 "border-red-500 border-2"
               }`}
              placeholder="Minimum"
            />
            <p className="text-lg">-</p>
            <input
              type="text"
              name="max_usage"
              value={values.max_usage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-1 rounded-lg bg-neutral-100
               text-neutral-800 placeholder:text-neutral-500
               w-48 focus:border-transparent focus:outline-none
               ${
                 errors.max_usage &&
                 touched.max_usage &&
                 "border-red-500 border-2"
               }`}
              placeholder="Maximum"
            />
          </div>
          <select
            name="usage_type"
            value={values.usage_type}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-6 py-1 rounded-lg bg-neutral-100
           text-neutral-800 hover:bg-neutral-300"
          >
            <option value="">--</option>
            {usageTypes.map((item) => {
              return (
                <option key={item.apiName} value={item.apiName}>
                  {item.humanName}
                </option>
              );
            })}
          </select>
          <button
            type="submit"
            className="absolute bottom-0 right-0 py-4 px-4 rounded-full bg-red-300 hover:bg-red-400"
          >
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
}

export default VehicleToolbarFilters;
