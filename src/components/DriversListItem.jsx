import React, { useState } from "react";
import { BsList, BsPencil, BsPerson, BsTrashFill } from "react-icons/bs";

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
      {/* // CONTENT */}
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
          <BsList />
          <p>View</p>
        </button>
        {/* <ViewVehicleModal
          isOpen={isOpenViewModal}
          toggle={toggleViewModal}
          vehicle={vehicle}
        /> */}
        <button
          onClick={toggleEditModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsPencil />
          <p>Edit</p>
        </button>
        {/* <EditVehicleModal
          isOpen={isOpenEditModal}
          toggle={toggleEditModal}
          vehicle={vehicle}
        /> */}
        <button
          onClick={toggleDeleteModal}
          className="flex items-center justify-center hover:bg-red-300
         px-4 py-1 space-x-2 rounded-full hover:shadow-sm"
        >
          <BsTrashFill />
          <p>Delete</p>
        </button>
        {/* <DeleteVehicleModal
          isOpen={isOpenDeleteModal}
          toggle={toggleDeleteModal}
          vehicle={vehicle}
        /> */}
      </div>
    </div>
  );
}

export default DriversListItem;
