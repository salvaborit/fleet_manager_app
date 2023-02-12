import React from "react";
import { BsPlusCircle, BsSliders } from "react-icons/bs";

function VehiclesToolbar() {
  return (
    <div
      className="w-full border-neutral-400 border-b-2 pb-1
                 flex flex-row items-end space-x-2 mb-14 px-32"
    >
      <h1 className="text-5xl mr-16 mb-1">Vehicles</h1>

      <button
        className="flex flex-row items-center justify-center hover:bg-red-200
       px-4 py-1 space-x-2 rounded-full"
      >
        <BsSliders />
        <p>Filters</p>
      </button>
      <button
        className="flex flex-row items-center justify-center hover:bg-red-200
       px-4 py-1 space-x-2 rounded-full"
      >
        <BsPlusCircle />
        <p>New vehicle</p>
      </button>
    </div>
  );
}

export default VehiclesToolbar;
