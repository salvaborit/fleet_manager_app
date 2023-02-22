import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { newDriverSchema } from "../validations/driver";
import Loading from "./Loading";

function NewDriverModal({ isOpen, toggle }) {
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    axios
      .post(`http://localhost:8000/drivers/`, values)
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
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      phone: "",
      birthdate: "2000-09-26",
      id_type: "",
      id_number: "",
    },
    validationSchema: newDriverSchema,
    onSubmit: onSubmit,
  });
  const idTypes = [
    { apiName: "CI", humanName: "CI" },
    { apiName: "PA", humanName: "PP" },
  ];

  return (
    <div
      className={`z-20 mt-0 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-500 flex flex-col"
      >
        <h1 className="text-4xl mb-6 font-bold text-neutral-600">New driver</h1>
        <div className="flex mb-4 space-x-12">
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              First name
            </p>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800
                          ${
                            errors.first_name &&
                            touched.first_name &&
                            `border-red-500 border-2
                            focus:border-red-500 focus:outline-none`
                          }`}
              placeholder="Emiliano"
            />
            {errors.first_name && touched.first_name && (
              <p className="text-xs text-red-500 mt-1 ml-2">
                {errors.first_name}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Last name
            </p>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800
                          ${
                            errors.last_name &&
                            touched.last_name &&
                            `border-red-500 border-2
                            focus:border-red-500 focus:outline-none`
                          }`}
              placeholder="Rodriguez"
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
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Email
            </p>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800
                          ${
                            errors.email &&
                            touched.email &&
                            `border-red-500 border-2
                            focus:border-red-500 focus:outline-none`
                          }`}
              placeholder="emiliano@email.com"
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.email}</p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Address
            </p>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800
                          ${
                            errors.address &&
                            touched.address &&
                            `border-red-500 border-2
                            focus:border-red-500 focus:outline-none`
                          }`}
              placeholder="Miraflores 1635"
            />
            {errors.address && touched.address && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.address}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-12 mb-4">
          <div className="flex-col">
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              ID
            </p>
            <div className="flex">
              <input
                type="text"
                name="id_number"
                value={values.id_number}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded-l-lg bg-neutral-200 z-10
                 text-neutral-800 w-48
                               ${
                                 errors.id_number &&
                                 touched.id_number &&
                                 `border-red-500 border-2
                                 focus:border-red-500 focus:outline-none`
                               }`}
                placeholder="61419712"
              />
              <select
                name="id_type"
                value={values.id_type}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded-r-lg bg-neutral-200 text-neutral-800
                hover:bg-neutral-300 ${
                  errors.id_type &&
                  touched.id_type &&
                  `border-red-500 border-2
                focus:border-red-500 focus:outline-none`
                }`}
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
            {errors.id_number && touched.id_number && (
              <p className="text-xs text-red-500 mt-1 mx-2 flex-wrap">
                {errors.id_number}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm italic mb-1 ml-1 font-bold text-neutral-500">
              Phone
            </p>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`px-4 py-2 rounded-lg bg-neutral-200 w-48
               text-neutral-800
                          ${
                            errors.phone &&
                            touched.phone &&
                            `border-red-500 border-2
                            focus:border-red-500 focus:outline-none`
                          }`}
              placeholder="094655951"
            />
            {errors.phone && touched.phone && (
              <p className="text-xs text-red-500 mt-1 ml-2">{errors.phone}</p>
            )}
          </div>
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
            Create
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

export default NewDriverModal;
