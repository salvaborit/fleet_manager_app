import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { newDocSchema } from "../validations/vehicleDocumentation";
import { TbFile } from "react-icons/tb";

function DeleteDocModal({ isOpen, toggle, doc }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete() {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8000/vehicle-docs/${doc.id}/`)
      .then((resp) => {
        setIsLoading(false);
        navigate(0);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }

  function renderStatusColorCode() {
    const date = new Date(doc.expiry);
    date.setDate(date.getDate() - doc.renovation_alert);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    const renovDate = `${year}-${month}-${day}`;
    const expiryDate = doc.expiry;
    const today = new Date();
    year = today.getFullYear();
    month = String(today.getMonth() + 1).padStart(2, "0");
    day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;

    let styles = "";
    if (currentDate < renovDate) {
      styles = "bg-green-500";
    } else if (currentDate < expiryDate) {
      styles = "bg-yellow-500";
    } else {
      styles = "bg-red-500";
    }

    return <div className={`${styles} w-4 h-4 rounded-full`}></div>;
  }

  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-500 flex flex-col text-neutral-700"
      >
        <h1 className="text-4xl mb-6 font-bold">Are you sure?</h1>
        <p className="text-lg mb-10">
          The following documentation will be deleted:
        </p>
        <div
          className="flex justify-center items-center space-x-10
        rounded-full bg-neutral-100 self-center pr-10 shadow-lg"
        >
          <div className=" relative p-4 rounded-full bg-neutral-300">
            <TbFile size={40} />
            <div className="absolute right-1 bottom-1">
              {renderStatusColorCode()}
            </div>
          </div>
          <div className="flex flex-col text-lg">
            <p className="font-bold">{doc.title}</p>
            <p>{doc.expiry}</p>
          </div>
        </div>
        <div className="flex mt-12">
          <button
            onClick={handleDelete}
            className="mr-4 px-4 py-2 rounded-xl font-bold
           bg-red-500 text-neutral-50 border-2 border-transparent
            hover:bg-neutral-50 hover:text-red-500 hover:border-2 hover:border-red-500"
          >
            Delete
          </button>
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-400 text-neutral-50
            hover:bg-neutral-50 border-2 border-neutral-400 font-bold
            hover:text-neutral-500"
            onClick={toggle}
          >
            Cancel
          </button>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
}

export default DeleteDocModal;
