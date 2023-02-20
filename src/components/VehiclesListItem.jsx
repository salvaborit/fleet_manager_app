import React, { useState } from "react";
import {
  BsInfoCircleFill,
  BsPencil,
  BsTrashFill,
  BsTruck,
} from "react-icons/bs";
import DeleteVehicleModal from "./DeleteVehicleModal";
import EditVehicleModal from "./EditVehicleModal";
import ViewVehicleModal from "./ViewVehicleModal";

function VehiclesListItem({ vehicle }) {
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  function toggleViewModal() {
    setIsOpenViewModal(!isOpenViewModal);
  }

  function toggleEditModal() {
    setIsOpenEditModal(!isOpenEditModal);
  }

  function toggleDeleteModal() {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }

  const STATUSES = {
    AC: "ACTIVE",
    MA: "MAINTENANCE",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

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

    return <div className={`${color} w-3 h-3 rounded-full`}></div>;
  }

  return (
    <div
      className="flex items-center space-x-20 rounded-full
       bg-neutral-100 justify-between shadow-md w-2/3 text-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 rounded-full bg-neutral-200">
        <BsTruck size={80} color={"#2a2a2a"} />
      </div>
      <div className="flex flex-col w-1/3">
        <h2 className="text-3xl font-bold">{vehicle.model}</h2>
        <h3 className="text-xl">{vehicle.license_plate}</h3>
      </div>
      <div>
        <h4 className="text-md flex justify-center items-center w-max">
          <b>Status: &nbsp;</b> {STATUSES[vehicle.status]}
          <div className="m-0 ml-4">{renderStatusColorCode()}</div>
        </h4>
        <h4 className="text-md w-max">
          <b>Usage:</b>{" "}
          {`${vehicle.usage.toLocaleString("en-us")} ${
            vehicle.usage_type === "HR" ? "hs" : "kms"
          }`}
        </h4>
      </div>
      <div
        className={`pr-12 space-y-1 text-sm px-2 ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={toggleViewModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsInfoCircleFill />
          <p>Info</p>
        </button>
        <ViewVehicleModal
          isOpen={isOpenViewModal}
          toggle={toggleViewModal}
          vehicle={vehicle}
        />
        <button
          onClick={toggleEditModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsPencil />
          <p>Edit</p>
        </button>
        <EditVehicleModal
          isOpen={isOpenEditModal}
          toggle={toggleEditModal}
          vehicle={vehicle}
        />
        <button
          onClick={toggleDeleteModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsTrashFill />
          <p>Delete</p>
        </button>
        <DeleteVehicleModal
          isOpen={isOpenDeleteModal}
          toggle={toggleDeleteModal}
          vehicle={vehicle}
        />
      </div>
    </div>
  );
}

export default VehiclesListItem;
