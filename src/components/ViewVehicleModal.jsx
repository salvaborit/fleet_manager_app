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

  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 absolute
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-600 flex flex-col"
      >
        <div className="flex space-x-12">
          <div>
            <p className="pl-1 text-sm italic">License</p>
            <h1 className="text-4xl mb-2 font-bold">{vehicle.license_plate}</h1>
          </div>
          <div>
            <p className="pl-1 text-sm italic">Model</p>
            <h2 className="text-2xl mb-6">{vehicle.model}</h2>
          </div>
        </div>
        <div className="flex space-x-12">
          <div>
            <p className="pl-1 text-sm italic">Status</p>
            <h1 className="text-xl mb-2 flex justify-center items-center space-x-2">
              <div>{STATUSES[vehicle.status]} </div>
              <div>{renderStatusColorCode()}</div>
            </h1>
          </div>
          <div>
            <p className="pl-1 text-sm italic">Usage</p>
            <h2 className="text-xl mb-6">
              {`${vehicle.usage.toLocaleString("en-us")}  ${
                vehicle.usage_type === "HR" ? "hs" : "kms"
              }`}
            </h2>
          </div>
        </div>
        <div>
          <p className="pl-1 text-sm italic mb-1">Notes</p>
          <p className="text-md italic text-neutral-700 mb-6 p-2 rounded-lg border-2">
            {renderVehicleNotes()}
          </p>
        </div>
        <div className="flex">
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-100"
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
