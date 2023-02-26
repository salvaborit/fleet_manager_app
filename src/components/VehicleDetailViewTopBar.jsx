import React, { useState } from "react";
import { TbChevronLeft, TbEdit, TbTrash, TbTruck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import DeleteVehicleModal from "./DeleteVehicleModal";
import EditVehicleModal from "./EditVehicleModal";

function VehicleDetailViewTopBar({ vehicle }) {
  const navigate = useNavigate();

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  function toggleEditModal() {
    setIsOpenEditModal(!isOpenEditModal);
  }

  function toggleDeleteModal() {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }
  return (
    <>
      <div className="flex items-center mr-16 mb-4 mt-6 justify-between w-full">
        <div className="flex">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-neutral-200 flex items-center justify-center
                      w-8 h-8 p-1 hover:bg-neutral-300 text-neutral-500 mr-16"
          >
            <TbChevronLeft size={25} />
          </button>
          <TbTruck size={40} className="text-neutral-500" />
          <h1 className="text-2xl font-bold text-neutral-500 ml-6">
            {vehicle.license_plate}
          </h1>
        </div>
        <div className="flex space-x-4 mr-4">
          <button
            onClick={toggleEditModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg
              text-blue-300 border-blue-300 hover:bg-blue-200 shadow-lg
              hover:text-blue-400"
          >
            <TbEdit size={20} />
          </button>
          <button
            onClick={toggleDeleteModal}
            className="flex items-center justify-center border-2 w-8 h-8 rounded-lg
               text-red-400 border-red-400 hover:bg-red-200 shadow-lg
               hover:text-red-500"
          >
            <TbTrash size={20} />
          </button>
        </div>
      </div>
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

export default VehicleDetailViewTopBar;
