import React from "react";

function VehicleToolbarNew() {
  const usageTypes = [
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hs" },
  ];

  return (
    <form
      className=" container w-full mt-8 mb-10 flex items-center
    space-x-10 flex-wrap"
    >
      <input
        type="text"
        className="px-4 py-1 rounded-lg"
        placeholder="License"
      />
      <input type="text" className="px-4 py-1 rounded-lg" placeholder="Model" />
      <input
        type="text"
        className="px-4 py-1 rounded-lg"
        placeholder="Status"
      />
      <div>
        <input
          type="text"
          className="px-4 py-1 rounded-lg"
          placeholder="Usage"
        />
        <select>
          {usageTypes.map((item) => {
            return <option key={item.apiName}>{item.humanName}</option>;
          })}
        </select>
      </div>
      <input type="text" placeholder="Observaciones" />
    </form>
  );
}

export default VehicleToolbarNew;
