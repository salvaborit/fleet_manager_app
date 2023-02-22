import React, { useState } from "react";
import {
  BsInfoCircleFill,
  BsPencil,
  BsPerson,
  BsTrashFill,
} from "react-icons/bs";
import { TbEdit, TbInfoCircle, TbTrash } from "react-icons/tb";
import DeleteDriverModal from "./DeleteDriverModal";
import EditDriverModal from "./EditDriverModal";
import ViewDriverModal from "./ViewDriverModal";

function DriversListItem({ driver }) {
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
  return (
    <>
      <tr
        className="flex text-neutral-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <td className="flex flex-col ml-10 w-4/12 font-bold">
          <p>
            {driver.first_name} {driver.last_name}
          </p>
        </td>

        <td className="flex flex-col w-2/12">
          <p>{driver.phone}</p>
        </td>

        <td className="flex flex-col w-3/12">
          <p>{driver.email}</p>
        </td>

        <td
          className={`flex justify-center text-sm space-x-2 m-auto
          ${isHovered ? "visible" : "invisible"}`}
        >
          <button
            onClick={toggleViewModal}
            className="flex items-center justify-center border-2 w-10 h-10
            rounded-lg shadow-lg text-neutral-400 border-neutral-400
              hover:bg-neutral-200 hover:text-neutral-500"
          >
            <TbInfoCircle size={iconSize} />
          </button>
          <button
            onClick={toggleEditModal}
            className="flex items-center justify-center border-2 w-10 h-10
            rounded-lg shadow-lg text-blue-400 border-blue-400
              hover:bg-blue-200 hover:text-blue-500"
          >
            <TbEdit size={iconSize} />
          </button>
          <button
            onClick={toggleDeleteModal}
            className="flex items-center justify-center border-2 w-10 h-10
            rounded-lg shadow-lg text-red-400 border-red-400
               hover:bg-red-200 hover:text-red-500"
          >
            <TbTrash size={iconSize} />
          </button>
        </td>
      </tr>
      <ViewDriverModal
        isOpen={isOpenViewModal}
        toggle={toggleViewModal}
        driver={driver}
      />
      <EditDriverModal
        isOpen={isOpenEditModal}
        toggle={toggleEditModal}
        driver={driver}
      />
      <DeleteDriverModal
        isOpen={isOpenDeleteModal}
        toggle={toggleDeleteModal}
        driver={driver}
      />
    </>
  );
}

export default DriversListItem;
