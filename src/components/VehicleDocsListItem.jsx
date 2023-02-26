import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbEdit, TbFile, TbTrash } from "react-icons/tb";
import DeleteDocModal from "./DeleteDocModal";
import EditDocModal from "./EditDocModal";
import Loading from "./Loading";
import NewDocModal from "./NewDocModal";

function VehicleDocsListItem({ docItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenNewModal, setIsOpenNewModal] = useState(false);

  const iconSize = 20;

  function toggleNewModal() {
    setIsOpenEditModal(!isOpenNewModal);
  }

  function toggleEditModal() {
    setIsOpenEditModal(!isOpenEditModal);
  }

  function toggleDeleteModal() {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }

  function renderStatus() {
    const date = new Date(docItem.expiry);
    date.setDate(date.getDate() - docItem.renovation_alert);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    const renovDate = `${year}-${month}-${day}`;
    const expiryDate = docItem.expiry;
    const today = new Date();
    year = today.getFullYear();
    month = String(today.getMonth() + 1).padStart(2, "0");
    day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;

    let styles = "";
    let statusName = "";
    if (currentDate < renovDate) {
      styles = "bg-green-200 border-green-400 text-green-800";
      statusName = "VALID";
    } else if (currentDate < expiryDate) {
      styles = "bg-yellow-200 border-yellow-400 text-yellow-800";
      statusName = "RENOV.";
    } else {
      styles = "bg-red-200 border-red-400 text-red-800";
      statusName = "EXP";
    }

    return (
      <td
        className={`${styles} flex items-center justify-center h-min w-1/12 font-bold rounded-lg px-2 py-1
        text-center text-xs overflow-hidden`}
      >
        {statusName}
      </td>
    );
  }

  return (
    <>
      <tr
        className="flex justify-between items-center text-neutral-700 text-sm py-1
       hover:bg-neutral-50 hover:shadow-inner"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <td className="w-2/5 pl-10 font-bold text-neutral-600 flex items-center">
          {docItem.title}
        </td>
        <td className="w-1/6 flex items-center justify-center">
          {docItem.expiry}
        </td>
        <>{renderStatus()}</>
        <td
          className={`flex text-center items-center justify-center text-sm space-x-2 py-1
         ${isHovered ? "visible" : "invisible"} pr-10`}
        >
          <button
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
      <NewDocModal
        isOpen={isOpenNewModal}
        toggle={toggleNewModal}
        doc={docItem}
      />
      <EditDocModal
        isOpen={isOpenEditModal}
        toggle={toggleEditModal}
        doc={docItem}
      />
      <DeleteDocModal
        isOpen={isOpenDeleteModal}
        toggle={toggleDeleteModal}
        doc={docItem}
      />
    </>
  );
}

export default VehicleDocsListItem;
