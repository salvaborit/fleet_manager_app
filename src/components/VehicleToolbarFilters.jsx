import React from "react";
import { BsSearch } from "react-icons/bs";

function VehicleToolbarFilters() {
  const usageTypes = [
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hrs" },
  ];

  const statuses = [
    { apiName: 0, humanName: "Select a status" },
    { apiName: "AC", humanName: "Active" },
    { apiName: "MA", humanName: "Maintenance" },
    { apiName: "TA", humanName: "Repairs" },
    { apiName: "IN", humanName: "Inactive" },
  ];

  return (
    <form className="container w-full mt-8 pb-6 flex flex-col space-y-4">
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            License
          </label>
          <input
            type="text"
            className="px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             w-40 focus:border-transparent focus:outline-none"
            placeholder="SOF1696..."
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Model
          </label>
          <input
            type="text"
            className="px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none"
            placeholder="Scania P410X.."
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Status
          </label>
          <select
            className="px-6 py-2 rounded-lg bg-neutral-200
             text-neutral-800 hover:bg-neutral-300"
          >
            {statuses.map((item) => {
              return <option key={item.apiName}>{item.humanName}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="license" className="ml-2 mb-1 text-sm text-neutral-600">
          Usage
        </label>
        <div className="flex space-x-4 relative">
          <div className="flex space-x-2">
            <input
              type="text"
              className="px-4 py-1 rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-500
               w-48 focus:border-transparent focus:outline-none"
              placeholder="Minimum"
            />
            <p className="text-lg">-</p>
            <input
              type="text"
              className="px-4 py-1 rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-500
               w-48 focus:border-transparent focus:outline-none"
              placeholder="Maximum"
            />
          </div>
          <select
            className="px-6 py-1 rounded-lg bg-neutral-200
           text-neutral-800 hover:bg-neutral-300"
          >
            {usageTypes.map((item) => {
              return (
                <option key={item.apiName} defaultValue="">
                  {item.humanName}
                </option>
              );
            })}
          </select>
          <button
            type="submit"
            className="absolute bottom-0 right-0 py-4 px-4 rounded-full bg-red-300 hover:bg-red-400"
          >
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
}

export default VehicleToolbarFilters;
