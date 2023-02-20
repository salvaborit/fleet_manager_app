import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { newUserSchema } from "../validations/User";

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
    validationSchema: newUserSchema,
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
      className={`z-20 w-screen h-screen left-0 top-0 absolute
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-600 flex flex-col"
      >
        <h1 className="text-4xl mb-6 font-bold">Edit vehicle</h1>
        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1">License</p>
            <input
              type="text"
              name="license_plate"
              value={values.license_plate}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none"
            />
          </div>
          <div>
            <p className="text-sm italic mb-1">Model</p>
            <input
              type="text"
              name="model"
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex space-x-12 mb-4">
          <div>
            <p className="text-sm italic mb-1">Status</p>

            <select
              name="status"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none hover:bg-neutral-300"
            >
              {statuses.map((item) => {
                return (
                  <option key={item.apiName} value={item.apiName}>
                    {item.humanName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p className="text-sm italic mb-1">Usage</p>
            <input
              type="text"
              name="usage"
              value={values.usage}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-4 py-2 rounded-l-lg bg-neutral-100
             focus:border-transparent focus:outline-none"
            />
            <select
              name="usage_type"
              value={values.usage_type}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-4 py-2 rounded-r-lg bg-neutral-100
              hover:bg-neutral-300"
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
        </div>
        <div>
          <p className="text-sm italic mb-1">Notes</p>
          <input
            type="text"
            name="notes"
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-4 py-2 w-full rounded-lg bg-neutral-100
            borders:border-transparent focus:outline-none"
          />
        </div>
        <div
          className="flex mt-6
        "
        >
          <button
            type="submit"
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-100"
          >
            Modify
          </button>
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-100"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditVehicleModal;
