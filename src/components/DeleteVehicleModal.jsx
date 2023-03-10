import axios from "axios";
import React, { useState } from "react";
import { TbTruck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function DeleteVehicleModal({ isOpen, toggle, vehicle }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const STATUSES = {
    AC: "ACTIVE",
    MA: "MAINTENANCE",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

  function handleDelete() {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8000/vehicles/${vehicle.id}/`)
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
    const statusName = STATUSES[vehicle.status];
    let color = "";
    if (statusName === "ACTIVE") {
      color = "bg-green-500";
    } else if (statusName === "MAINTENANCE" || statusName === "REPAIRS") {
      color = "bg-yellow-500";
    } else {
      color = "bg-red-500";
    }

    return <div className={`${color} w-4 h-4 rounded-full`}></div>;
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

        <p className="text-lg mb-10">The following vehicle will be deleted:</p>
        <div
          className="flex justify-center items-center space-x-10
        rounded-full bg-neutral-100 self-center pr-10 shadow-lg"
        >
          <div className=" relative p-4 rounded-full bg-neutral-300">
            <TbTruck size={40} />
            <div className="absolute right-1 bottom-1">
              {renderStatusColorCode()}
            </div>
          </div>
          <div className="flex flex-col font-bold text-lg">
            <p>{vehicle.license_plate}</p>
          </div>
          <div className="flex flex-col">
            <p>{vehicle.model}</p>
            <p>
              {`${vehicle.usage.toLocaleString("en-us")}
              ${vehicle.usage_type === "HR" ? "hs" : "kms"}`}
            </p>
          </div>
        </div>
        <p
          className="my-14 border-2 rounded-lg py-4 px-4
         border-red-300 bg-red-200 text-red-600"
        >
          All associated documentation and maintenence records will be deleted
          too.
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

export default DeleteVehicleModal;
