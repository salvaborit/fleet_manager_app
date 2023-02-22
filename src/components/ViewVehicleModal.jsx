import React from "react";

function ViewVehicleModal({ isOpen, toggle, vehicle }) {
  const STATUSES = {
    AC: "ACTIVE",
    MA: "MAINTENANCE",
    TA: "REPAIRS",
    IN: "INACTIVE",
  };

  function renderStatusColorCode() {
    const statusName = STATUSES[vehicle.status];
    let color = "";
    if (statusName === "ACTIVE") {
      color = "bg-green-500";
    } else if (statusName === "MAINTENANCE" || statusName === "REPAIRS") {
      color = "bg-yellow-500";
    } else {
      color = "bg-red-500";
    }

    return <div className={`${color} w-3 h-3 rounded-full`}></div>;
  }

  function renderVehicleNotes() {
    if (vehicle.notes === "") {
      return <i>Notes are empty</i>;
    } else {
      return `${vehicle.notes}`;
    }
  }

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

  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-500 flex flex-col text-neutral-700"
      >
        <div className="flex space-x-12">
          <div>
            <p className="ml-1 text-sm italic font-bold text-neutral-500">
              License
            </p>
            <p className="text-4xl mb-2 font-bold">{vehicle.license_plate}</p>
          </div>
        </div>
        <div className="flex space-x-12">
          <div>
            <p className="ml-1 text-sm italic font-bold text-neutral-500">
              Model
            </p>
            <p className="text-2xl mb-6">{vehicle.model}</p>
          </div>
        </div>
        <div className="flex space-x-12">
          <div>
            <p className="ml-1 text-sm italic font-bold text-neutral-500">
              Status
            </p>
            <h1 className="text-xl mb-2 mt-1 flex justify-center items-center space-x-2">
              {renderStatus()}
            </h1>
          </div>
          <div>
            <p className="ml-1 text-sm italic font-bold text-neutral-500">
              Usage
            </p>
            <h2 className="text-xl mb-6">
              {`${vehicle.usage.toLocaleString("en-us")}  ${
                vehicle.usage_type === "HR" ? "hs" : "kms"
              }`}
            </h2>
          </div>
        </div>
        <div>
          <p className="ml-1 text-sm italic font-bold text-neutral-500 mb-1">
            Notes
          </p>
          <p
            className="text-md italic text-neutral-700 mb-6 p-2 rounded-lg border-2
          border-neutral-400"
          >
            {renderVehicleNotes()}
          </p>
        </div>
        <div className="flex">
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-400 text-neutral-50
            hover:bg-neutral-50 border-2 border-neutral-400 font-bold
            hover:text-neutral-500"
            onClick={toggle}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewVehicleModal;
