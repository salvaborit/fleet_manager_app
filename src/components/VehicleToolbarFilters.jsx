import React from "react";
import { useFormik } from "formik";

import { FaSearch } from "react-icons/fa";

import { vehicleFilterSchema } from "../validations/vehicle";

function VehicleToolbarFilters({ fetchFilteredData }) {
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
    validationSchema: vehicleFilterSchema,
    onSubmit: onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="relative container w-full mt-8 mb-6 flex flex-col space-y-2"
    >
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <label
            htmlFor="license_plate"
            className="ml-2 mb-1 text-sm text-neutral-500 font-bold italic"
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
             text-neutral-800 placeholder:text-neutral-400
             w-40
             ${
               errors.license_plate &&
               touched.license_plate &&
               `border-red-500 border-2 focus:border-red-500 focus:outline-none`
             }`}
            placeholder="SOF 1696"
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
            className="ml-2 mb-1 text-sm text-neutral-500 font-bold italic"
          >
            Model
          </label>
          <input
            type="text"
            name="model"
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-400

             ${
               errors.model &&
               touched.model &&
               `border-red-500 border-2 focus:border-red-500 focus:outline-none`
             }`}
            placeholder="Scania P410 XT"
          />
          {errors.model && touched.model && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.model}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-500 font-bold italic"
          >
            Status
          </label>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-6 py-2 rounded-lg bg-neutral-200
             text-neutral-600 hover:bg-neutral-300
             ${
               errors.status &&
               touched.status &&
               `border-red-500 border-2 focus:border-red-500 focus:outline-none`
             }`}
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
        <label
          htmlFor="license"
          className="ml-2 mb-1 text-sm text-neutral-500 font-bold italic"
        >
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
              className={`px-4 py-1 rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-400
               w-48
               ${
                 errors.min_usage &&
                 touched.min_usage &&
                 `"border-red-500 border-2 focus:border-red-500 focus:outline-none`
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
              className={`px-4 py-1 rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-400
               w-48
               ${
                 errors.max_usage &&
                 touched.max_usage &&
                 `"border-red-500 border-2 focus:border-red-500 focus:outline-none`
               }`}
              placeholder="Maximum"
            />
          </div>
          <select
            name="usage_type"
            value={values.usage_type}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-6 py-1 rounded-lg bg-neutral-200
           text-neutral-600 hover:bg-neutral-300"
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
            className="absolute bottom-0 right-0 py-4 px-4 rounded-full
             bg-blue-400 border-2 border-blue-400 hover:text-blue-400
              hover:bg-neutral-50 shadow-md text-neutral-50"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
}

export default VehicleToolbarFilters;
