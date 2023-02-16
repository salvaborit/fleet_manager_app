import React from "react";

function VehicleToolbarFilters() {
  const usageTypes = [
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hrs" },
  ];

  const statuses = [
    { apiName: "AC", humanName: "Active" },
    { apiName: "MA", humanName: "Maintenance" },
    { apiName: "TA", humanName: "Repairs" },
    { apiName: "IN", humanName: "Inactive" },
    { apiName: 0, humanName: "Select a status" },
  ];

  return (
    <form
      className=" container w-full mt-8 mb-10 flex items-center
    space-x-10 flex-nowrap"
    >
      <input
        type="text"
        className="px-4 py-1 rounded-lg bg-neutral-200
         text-neutral-800 placeholder:text-neutral-600
         w-40"
        placeholder="License"
      />
      <input
        type="text"
        className="px-4 py-1 rounded-lg bg-neutral-200
         text-neutral-800 placeholder:text-neutral-600"
        placeholder="Model"
      />

      <select
        className="px-6 py-2 rounded-lg bg-neutral-200
         text-neutral-800 hover:bg-neutral-300"
      >
        {statuses.map((item) => {
          return <option key={item.apiName}>{item.humanName}</option>;
        })}
      </select>
      <div className="flex ">
        <input
          type="text"
          className="z-10 px-4 py-1 rounded-l-lg bg-neutral-200
           text-neutral-800 placeholder:text-neutral-600
           w-48"
          placeholder="Usage"
        />
        <select
          className="px-6 py-1 rounded-r-lg bg-neutral-200
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
      </div>
    </form>
  );
}

export default VehicleToolbarFilters;
