import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { newVehicleSchema } from "../validations/vehicle";
import Loading from "./Loading";

function EditVehicleModal({ isOpen, toggle, vehicle }) {
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    axios
      .put(`http://localhost:8000/vehicles/${vehicle.id}/`, values)
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
      license_plate: vehicle.license_plate,
      model: vehicle.model,
      status: vehicle.status,
      usage: vehicle.usage,
      usage_type: vehicle.usage_type,
      notes: vehicle.notes,
    },
    validationSchema: newVehicleSchema,
    onSubmit: onSubmit,
  });
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
        <h1 className="text-4xl mb-6 font-bold">Edit vehicle</h1>
        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              License
            </p>
            <input
              type="text"
              name="license_plate"
              value={values.license_plate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200
              ${
                errors.license_plate &&
                touched.license_plate &&
                `border-red-500 border-2
                 focus:border-red-500 focus:outline-none`
              }`}
              placeholder="SOF 1696"
            />
            {errors.license_plate && touched.license_plate && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.license_plate}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Model
            </p>
            <input
              type="text"
              name="model"
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200
             ${
               errors.model &&
               touched.model &&
               `border-red-500 border-2
                focus:border-red-500 focus:outline-none`
             }`}
              placeholder="Scania P410 XT"
            />
            {errors.model && touched.model && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.model}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-12 mb-4">
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Status
            </p>

            <select
              name="status"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300
             ${
               errors.status &&
               touched.status &&
               `border-red-500 border-2
               focus:border-red-500 focus:outline-none`
             }`}
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
          <div className="flex-col">
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Usage
            </p>
            <div className="flex">
              <input
                type="text"
                name="usage"
                value={values.usage}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded-l-lg bg-neutral-200 z-10
                ${
                  errors.usage &&
                  touched.usage &&
                  `border-red-500 border-2
                   focus:border-red-500 focus:outline-none`
                }`}
                placeholder="Usage in hs or kms"
              />
              <select
                name="usage_type"
                value={values.usage_type}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded-r-lg bg-neutral-200
                hover:bg-neutral-300
                ${
                  errors.usage_type &&
                  touched.usage_type &&
                  `border-red-500 border-2
                focus:border-red-500 focus:outline-none`
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
            {errors.usage && touched.usage && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.usage}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
            Notes
          </p>
          <textarea
            type="text"
            rows="5"
            name="notes"
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-4 py-2 w-full rounded-lg bg-neutral-200"
            placeholder="Check tyre pressure, broken fender"
          />
        </div>
        <div
          className="flex mt-6
        "
        >
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

export default EditVehicleModal;
