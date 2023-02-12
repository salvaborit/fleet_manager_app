import React from "react";
import { BsPlusCircle, BsSliders } from "react-icons/bs";

function VehiclesToolbar() {
  return (
    <div
      className="w-full border-gray-300 border-b-2 pb-1
    flex flex-row space-x-2 mb-6"
    >
      <button
        className="flex flex-row items-center justify-center hover:bg-gray-300
       px-4 py-1 space-x-2 rounded-full"
      >
        <BsSliders />
        <p>Filters</p>
      </button>
      <button
        className="flex flex-row items-center justify-center hover:bg-gray-300
       px-4 py-1 space-x-2 rounded-full"
      >
        <BsPlusCircle />
        <p>New vehicle</p>
      </button>
    </div>
  );
}

export default VehiclesToolbar;
