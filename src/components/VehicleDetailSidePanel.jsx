import React from "react";

function VehicleDetailSidePanel({ vehicle }) {
  const STATUSES = {
    AC: "ACTIVE",
    MA: "MAINTENANCE",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

  function renderStatus() {
    const statusName = STATUSES[vehicle.status];
    let styles = "";
    if (statusName === STATUSES["AC"]) {
      styles = "bg-green-200 border-green-400 text-green-800";
    } else if (statusName === STATUSES["MA"] || statusName === STATUSES["TA"]) {
      styles = "bg-yellow-200 border-yellow-400 text-yellow-800";
    } else {
      styles = "bg-red-200 border-red-400 text-red-800";
    }

    return (
      <p
        className={`${styles} font-bold rounded-lg px-2 py-1 w-full text-center
        text-sm overflow-hidden`}
      >
        {statusName}
      </p>
    );
  }

  function renderVehicleNotes() {
    if (vehicle.notes === "") {
      return <i>Notes are empty</i>;
    } else {
      return `${vehicle.notes}`;
    }
  }

  return (
    <div
      className="h-max-full w-3/12 my-8 ml-8 bg-neutral-100 shadow-md rounded-lg
    py-4 px-4 overflow-y-auto"
    >
      <p className="text-xl mb-2 mt-1 flex justify-center items-center space-x-2">
        {renderStatus()}
      </p>
      <p className="ml-1 text-sm italic font-bold text-neutral-500">License</p>
      <p className="text-2xl mb-2 font-bold">{vehicle.license_plate}</p>
      <p className="ml-1 text-sm italic font-bold text-neutral-500">Model</p>
      <p className="mb-2 font-bold">{vehicle.model}</p>
      <p className="ml-1 text-sm italic font-bold text-neutral-500">Model</p>
      <p className="mb-6 font-bold">
        {`${vehicle.usage.toLocaleString("en-us")}  ${
          vehicle.usage_type === "HR" ? "hs" : "kms"
        }`}
      </p>
      <p className="ml-1 text-sm italic font-bold text-neutral-500 mb-1">
        Notes
      </p>
      <p
        className="text-md italic text-neutral-700 mb-6 p-2 rounded-lg border-2
          border-neutral-300 overflow-y-auto bg-neutral-50"
      >
        {renderVehicleNotes()}
      </p>
    </div>
  );
}

export default VehicleDetailSidePanel;
