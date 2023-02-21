import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { newDriverSchema } from "../validations/driver";

function EditDriverModal({ isOpen, toggle, driver }) {
  const navigate = useNavigate();

  const idTypes = [
    { apiName: "CI", humanName: "CI" },
    { apiName: "PA", humanName: "Passport" },
  ];

  function onSubmit(values, actions) {
    axios
      .put(`http://localhost:8000/drivers/${driver.id}/`, values)
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
      first_name: driver.first_name,
      last_name: driver.last_name,
      address: driver.address,
      email: driver.email,
      phone: driver.phone,
      birthdate: driver.birthdate,
      id_type: driver.id_type,
      id_number: driver.id_number,
    },
    validationSchema: newDriverSchema,
    onSubmit: onSubmit,
  });
  return (
    <div
      onSubmit={handleSubmit}
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-600 flex flex-col"
      >
        <h1 className="text-4xl mb-6 font-bold">
          Edit {driver.first_name}'s details
        </h1>
        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1">First name</p>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none
             ${
               errors.first_name &&
               touched.first_name &&
               "border-red-500 border-2"
             }`}
            />
            {errors.first_name && touched.first_name && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.first_name}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1">Last name</p>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none
             ${
               errors.last_name &&
               touched.last_name &&
               "border-red-500 border-2"
             }`}
            />
            {errors.last_name && touched.last_name && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.last_name}
              </p>
            )}
          </div>
        </div>

        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1">Phone</p>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none
             ${errors.phone && touched.phone && "border-red-500 border-2"}`}
            />
            {errors.phone && touched.phone && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.phone}</p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1">Email</p>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-100
             focus:border-transparent focus:outline-none
             ${errors.email && touched.email && "border-red-500 border-2"}`}
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1">Address</p>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-100
              focus:border-transparent focus:outline-none
              ${
                errors.address && touched.address && "border-red-500 border-2"
              }`}
            />
            {errors.address && touched.address && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.address}</p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1">Identification</p>
            <div className="flex justify-start">
              <input
                type="text"
                name="id_number"
                value={values.id_number}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded-l-lg bg-neutral-100
               focus:border-transparent focus:outline-none w-1/3
               ${
                 errors.id_number &&
                 touched.id_number &&
                 "border-red-500 border-2"
               }`}
              />
              <select
                name="id_type"
                value={values.id_type}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 py-2 rounded-r-lg bg-neutral-100
              hover:bg-neutral-300"
              >
                {idTypes.map((item) => {
                  return (
                    <option key={item.apiName} value={item.apiName}>
                      {item.humanName}
                    </option>
                  );
                })}
              </select>
            </div>
            {errors.id_number && touched.id_number && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.id_number}
              </p>
            )}
          </div>
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

export default EditDriverModal;
