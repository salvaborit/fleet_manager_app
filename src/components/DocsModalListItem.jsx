import React, { useState } from "react";
import {
  TbEdit,
  TbFile,
  TbFileDescription,
  TbInfoCircle,
  TbTrash,
} from "react-icons/tb";

function DocsModalListItem({ docItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const iconSize = 20;
  function renderStatus() {
    // const statusName = STATUSES[vehicle.status];
    // let styles = "";
    // if (statusName === STATUSES["AC"]) {
    //   styles = "bg-green-200 border-green-400 text-green-800";
    // } else if (statusName === STATUSES["MA"] || statusName === STATUSES["TA"]) {
    //   styles = "bg-yellow-200 border-yellow-400 text-yellow-800";
    // } else {
    //   styles = "bg-red-200 border-red-400 text-red-800";
    // }
    // return (
    //   <td
    //     className={`${styles} font-bold rounded-lg px-2 py-1 w-full text-center
    //     text-sm overflow-hidden`}
    //   >
    //     {statusName}
    //   </td>
    // );
  }

  return (
    <tr
      className="flex text-neutral-700 hover:bg-neutral-50 hover:shadow-inner
      text-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="w-2/5 pl-10 font-bold text-neutral-600 flex items-center">
        {docItem.title}
      </td>
      <td className="w-1/5 flex items-center">{docItem.expiry}</td>
      <td className="w-1/6 flex items-center">{renderStatus()}</td>
      <td
        className={`flex text-center justify-center text-sm space-x-2 py-1
           m-auto ${isHovered ? "visible" : "invisible"} pr-10`}
      >
        <button
          className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
              text-orange-300 border-orange-300 hover:bg-orange-200
              hover:text-orange-400"
        >
          <TbFile size={iconSize} />
        </button>
        <button
          className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
              text-blue-300 border-blue-300 hover:bg-blue-200
              hover:text-blue-400"
        >
          <TbEdit size={iconSize} />
        </button>
        <button
          className="flex items-center justify-center border-2 w-8 h-8 rounded-lg shadow-lg
               text-red-400 border-red-400 hover:bg-red-200
               hover:text-red-500"
        >
          <TbTrash size={iconSize} />
        </button>
      </td>
    </tr>
  );
}

export default DocsModalListItem;
