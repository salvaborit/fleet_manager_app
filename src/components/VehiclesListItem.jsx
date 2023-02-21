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

  const iconSize = 20;

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
    MA: "MAINT.",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

  function renderStatus() {
    const statusName = STATUSES[vehicle.status];
    let styles = "";
    if (statusName === STATUSES["AC"]) {
      styles = "bg-green-200 border-green-400 text-green-800";
    } else if (statusName === STATUSES["MA"] || statusName === STATUSES["TA"]) {
      styles = "bg-yellow-200 border-yellow-400 text-yellow-800";
    } else {
      styles = "bg-red-200 border-red-400 text-red-800";
    }

    return (
      <td className={`${styles} font-bold rounded-lg border-2 px-2 text-sm`}>
        {statusName}
      </td>
    );
  }

  const styles = { width: "10%" };

  return (
    <tr
      className="flex items-center justify-between
       bg-neutral-100 w-full text-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="flex flex-col ml-10 w-1/12 font-bold">
        <p>{vehicle.license_plate}</p>
      </td>
      <td className="flex flex-col w-3/12">
        <p>{vehicle.model}</p>
      </td>
      <td className=" w-1/12">
        {`${vehicle.usage.toLocaleString("en-us")} ${
          vehicle.usage_type === "HR" ? "hs" : "kms"
        }`}
      </td>
      <td
        className="text-md flex justify-center items-center
        w-1/12"
      >
        {renderStatus()}
      </td>
      <td
        className={`flex text-sm space-x-2 mr-10 ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={toggleViewModal}
          className="flex items-center justify-center hover:bg-blue-300
         px-2 py-2 space-x-2 rounded-lg hover:shadow-sm"
        >
          <BsInfoCircleFill size={iconSize} />
        </button>
        <ViewVehicleModal
          isOpen={isOpenViewModal}
          toggle={toggleViewModal}
          vehicle={vehicle}
        />
        <button
          onClick={toggleEditModal}
          className="flex items-center justify-center hover:bg-blue-300
         px-2 py-1 space-x-2 rounded-lg hover:shadow-sm"
        >
          <BsPencil size={iconSize} />
        </button>
        <EditVehicleModal
          isOpen={isOpenEditModal}
          toggle={toggleEditModal}
          vehicle={vehicle}
        />
        <button
          onClick={toggleDeleteModal}
          className="flex items-center justify-center hover:bg-blue-300
         px-2 py-1 space-x-2 rounded-lg hover:shadow-sm"
        >
          <BsTrashFill size={iconSize} />
        </button>
        <DeleteVehicleModal
          isOpen={isOpenDeleteModal}
          toggle={toggleDeleteModal}
          vehicle={vehicle}
        />
      </td>
    </tr>
  );
}

export default VehiclesListItem;
