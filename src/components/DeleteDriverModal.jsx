import axios from "axios";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function DeleteDriverModal({ isOpen, toggle, driver }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`http://localhost:8000/drivers/${driver.id}/`)
      .then((resp) => {
        navigate(0);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-600 flex flex-col"
      >
        <h1 className="text-4xl mb-6 font-bold">Are you sure?</h1>

        <p className="text-lg mb-10">The following driver will be deleted:</p>
        <div
          className="flex justify-center items-center space-x-10
        rounded-full bg-neutral-100 self-center pr-10 shadow-lg"
        >
          <div className=" relative p-4 rounded-full bg-neutral-300">
            <BsPerson size={40} />
          </div>
          <div className="flex flex-col font-bold text-lg">
            <p>
              {driver.first_name} {driver.last_name}
            </p>
            <p className="text-sm font-normal">{driver.phone}</p>
          </div>
          <div className="flex flex-col">
            <p>{driver.birthdate}</p>
            <p>
              {driver.id_type}
              {driver.id_number}
            </p>
          </div>
        </div>
        <p
          className="my-14 border-2 rounded-lg py-4 px-4
         border-red-300 bg-red-200 text-red-600"
        >
          All associated documentation records will be deleted too.
        </p>
        <div className="flex">
          <button
            onClick={handleDelete}
            className="mr-4 px-4 py-2 rounded-xl font-bold
           bg-red-500 text-neutral-50 border-2 border-transparent
            hover:bg-neutral-50 hover:text-red-500 hover:border-2 hover:border-red-500"
          >
            Delete
          </button>
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-100"
            onClick={toggle}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDriverModal;
