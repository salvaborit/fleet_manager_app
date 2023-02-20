import React, { useState } from "react";
import {
  BsInfoCircleFill,
  BsPencil,
  BsPerson,
  BsTrashFill,
} from "react-icons/bs";
import DeleteDriverModal from "./DeleteDriverModal";
import EditDriverModal from "./EditDriverModal";
import ViewDriverModal from "./ViewDriverModal";

function DriversListItem({ driver }) {
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
  return (
    <div
      className="flex items-center space-x-20 rounded-full
       bg-neutral-100 justify-between shadow-md w-2/3 text-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 rounded-full bg-neutral-200">
        <BsPerson size={80} color={"#2a2a2a"} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-center">
          {driver.first_name} {driver.last_name}
        </h2>
        <h2 className="text-xl text-center">{driver.phone}</h2>
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
        <ViewDriverModal
          isOpen={isOpenViewModal}
          toggle={toggleViewModal}
          driver={driver}
        />
        <button
          onClick={toggleEditModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsPencil />
          <p>Edit</p>
        </button>
        <EditDriverModal
          isOpen={isOpenEditModal}
          toggle={toggleEditModal}
          driver={driver}
        />
        <button
          onClick={toggleDeleteModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsTrashFill />
          <p>Delete</p>
        </button>
        <DeleteDriverModal
          isOpen={isOpenDeleteModal}
          toggle={toggleDeleteModal}
          driver={driver}
        />
      </div>
    </div>
  );
}

export default DriversListItem;
