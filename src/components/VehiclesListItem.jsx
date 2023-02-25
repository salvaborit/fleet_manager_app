import React, { useState } from "react";

import DeleteVehicleModal from "./DeleteVehicleModal";
import EditVehicleModal from "./EditVehicleModal";
import VehicleDocumentationsModal from "./VehicleDocumentationsModal";
import ViewVehicleModal from "./ViewVehicleModal";

import { TbInfoCircle, TbEdit, TbTrash, TbFile } from "react-icons/tb";

function VehiclesListItem({ vehicle }) {
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenDocsModal, setIsOpenDocsModal] = useState(false);

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

  function toggleDocsModal() {
    setIsOpenDocsModal(!isOpenDocsModal);
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
      <td
        className={`${styles} font-bold rounded-lg px-2 py-1 w-full text-center
        text-sm overflow-hidden`}
      >
        {statusName}
      </td>
    );
  }

  return (
    <>
      <tr
        className="flex text-neutral-700 hover:bg-neutral-100 hover:shadow-inner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <td className="flex items-center ml-10 w-2/12 font-bold">
          <p>{vehicle.license_plate}</p>
        </td>
        <td className="flex items-center w-4/12">
          <p>{vehicle.model}</p>
        </td>
        <td className="flex items-center w-2/12">
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
          className={`flex text-center justify-center text-sm space-x-2 py-1
           m-auto ${isHovered ? "visible" : "invisible"}`}
        >
          <button
            onClick={toggleViewModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
              text-neutral-400 border-neutral-400 hover:bg-neutral-200
              hover:text-neutral-500"
          >
            <TbInfoCircle size={iconSize} />
          </button>{" "}
          <button
            onClick={toggleDocsModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
              text-orange-300 border-orange-300 hover:bg-orange-200
              hover:text-orange-400"
          >
            <TbFile size={iconSize} />
          </button>
          <button
            onClick={toggleEditModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
              text-blue-300 border-blue-300 hover:bg-blue-200
              hover:text-blue-400"
          >
            <TbEdit size={iconSize} />
          </button>
          <button
            onClick={toggleDeleteModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
               text-red-400 border-red-400 hover:bg-red-200
               hover:text-red-500"
          >
            <TbTrash size={iconSize} />
          </button>
        </td>
      </tr>
      <ViewVehicleModal
        isOpen={isOpenViewModal}
        toggle={toggleViewModal}
        vehicle={vehicle}
      />
      <VehicleDocumentationsModal
        isOpen={isOpenDocsModal}
        toggle={toggleDocsModal}
        vehicle={vehicle}
      />
      <EditVehicleModal
        isOpen={isOpenEditModal}
        toggle={toggleEditModal}
        vehicle={vehicle}
      />
      <DeleteVehicleModal
        isOpen={isOpenDeleteModal}
        toggle={toggleDeleteModal}
        vehicle={vehicle}
      />
    </>
  );
}

export default VehiclesListItem;
