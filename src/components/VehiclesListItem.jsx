import React, { useState } from "react";
import { BsList, BsPencil, BsTrashFill } from "react-icons/bs";

function VehiclesListItem({ license, model, status, usage }) {
  const STATUSES = {
    AC: "ACTIVE",
    MA: "MAINTENANCE",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center mb-2 space-x-20 rounded-lg
     hover:bg-neutral-200 justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/assets/images/truck.png"
        alt="truck"
        className="aspect-square w-28 rounded-l-lg"
      />
      <div className="flex flex-col w-1/3">
        <h1 className="text-3xl font-bold">{model}</h1>
        <h2 className="text-xl">{license}</h2>
      </div>
      <div>
        <h3 className="text-md">
          <b>Status:</b> {STATUSES[status]}
        </h3>
        <h3 className="text-md">
          <b>Usage:</b> {usage}
        </h3>
      </div>
      <div
        className={`pr-8 space-y-1 text-sm px-2 ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <button
          className="flex items-center justify-center hover:bg-red-300
       px-4 py-1 space-x-2 rounded-full"
        >
          <BsList />
          <p>View</p>
        </button>
        <button
          className="flex items-center justify-center hover:bg-red-300
       px-4 py-1 space-x-2 rounded-full"
        >
          <BsPencil />
          <p>Edit</p>
        </button>
        <button
          className="flex items-center justify-center hover:bg-red-300
       px-4 py-1 space-x-2 rounded-full"
        >
          <BsTrashFill />
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}

export default VehiclesListItem;
