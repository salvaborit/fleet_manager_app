import React, { useState } from "react";
import { TbEdit, TbFile, TbInfoCircle, TbTrash } from "react-icons/tb";
import DeleteDriverModal from "./DeleteDriverModal";
import EditDriverModal from "./EditDriverModal";
import ViewDriverModal from "./ViewDriverModal";

function DriversListItem({ driver }) {
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
  return (
    <>
      <tr
        className="flex text-neutral-700 hover:bg-neutral-100 hover:shadow-inner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <td className="flex items-center ml-10 w-4/12 font-bold">
          <p>
            {driver.first_name} {driver.last_name}
          </p>
        </td>

        <td className="flex items-center w-2/12">
          <p>{driver.phone}</p>
        </td>

        <td className="flex items-center w-3/12">
          <p>{driver.email}</p>
        </td>

        <td
          className={`flex justify-center text-sm space-x-2 m-auto py-1
          ${isHovered ? "visible" : "invisible"}`}
        >
          <button
            onClick={toggleViewModal}
            className="flex items-center justify-center border-2 w-8 h-8
            rounded-lg shadow-lg text-neutral-400 border-neutral-400
              hover:bg-neutral-200 hover:text-neutral-500"
          >
            <TbInfoCircle size={iconSize} />
          </button>
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
            className="flex items-center justify-center border-2 w-8 h-8
            rounded-lg shadow-lg text-blue-400 border-blue-400
              hover:bg-blue-200 hover:text-blue-500"
          >
            <TbEdit size={iconSize} />
          </button>
          <button
            onClick={toggleDeleteModal}
            className="flex items-center justify-center border-2 w-8 h-8
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
