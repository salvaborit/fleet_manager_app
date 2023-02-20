import React from "react";
import { useFormik } from "formik";

import { driverFilterSchema } from "../validations/driver";
import { BsSearch } from "react-icons/bs";

function DriverToolbarFilters({ fetchFilteredData }) {
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
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      phone: "",
      birthdate: "",
      id_type: "",
      id_number: "",
    },
    validationSchema: driverFilterSchema,
    onSubmit: onSubmit,
  });

  const idTypes = [
    { apiName: "CI", humanName: "CI" },
    { apiName: "PA", humanName: "Passport" },
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
            htmlFor="first_name"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            First name
          </label>
          <input
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             w-56 focus:border-transparent focus:outline-none
             ${
               errors.first_name &&
               touched.first_name &&
               "border-red-500 border-2"
             }`}
            placeholder="Emiliano"
          />
          {errors.first_name && touched.first_name && (
            <p className="text-xs text-red-500 mt-1 ml-2">
              {errors.first_name}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="last_name"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none w-56
             ${
               errors.last_name &&
               touched.last_name &&
               "border-red-500 border-2"
             }`}
            placeholder="Rodriguez"
          />
          {errors.last_name && touched.last_name && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.last_name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="usage" className="ml-2 mb-1 text-sm text-neutral-600">
            Identification
          </label>
          <div className="flex relative">
            <input
              type="text"
              name="id_number"
              value={values.id_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-1 rounded-l-lg bg-neutral-100
                 text-neutral-800 placeholder:text-neutral-500
                 w-48 focus:border-transparent focus:outline-none
                 ${
                   errors.id_number &&
                   touched.id_number &&
                   "border-red-500 border-2"
                 }`}
              placeholder="57675647"
            />
            <select
              name="id_type"
              value={values.id_type}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-6 py-1 rounded-r-lg bg-neutral-100
             text-neutral-800 hover:bg-neutral-300 border-l-2 border-neutral-300
             ${errors.id_type && touched.id_type && "border-red-500 border-2"}`}
            >
              <option value="">--</option>
              {idTypes.map((item) => {
                return (
                  <option key={item.apiName} value={item.apiName}>
                    {item.humanName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between">
            {errors.id_number && touched.id_number && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.id_number}
              </p>
            )}
            {errors.id_type && touched.id_type && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.id_type}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex space-x-10">
        <div className="flex flex-col">
          <label htmlFor="phone" className="ml-2 mb-1 text-sm text-neutral-600">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none w-56
             ${errors.phone && touched.phone && "border-red-500 border-2"}`}
            placeholder="+598 98 765 432"
          />
          {errors.phone && touched.phone && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="ml-2 mb-1 text-sm text-neutral-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none w-64
             ${errors.email && touched.email && "border-red-500 border-2"}`}
            placeholder="user@provider.com"
          />
          {errors.email && touched.email && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-4 py-1 rounded-lg bg-neutral-100
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none
             ${errors.address && touched.address && "border-red-500 border-2"}`}
            placeholder="Av. Rivera 1234"
          />
          {errors.address && touched.address && (
            <p className="text-xs text-red-500 mt-1 ml-2">{errors.address}</p>
          )}
        </div>
        <button
          type="submit"
          className="absolute bottom-0 right-0 py-4 px-4 rounded-full
             bg-red-300 hover:bg-red-400"
        >
          <BsSearch />
        </button>
      </div>
    </form>
  );
}

export default DriverToolbarFilters;
