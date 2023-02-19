import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  return (
    <div className="container w-full h-full flex flex-col space-y-4 overflow-y-auto">
      {vehiclesList.map((v) => {
        return (
          <VehiclesListItem
            key={v.id}
            license={v.license_plate}
            model={v.model}
            status={v.status}
            usage={`${v.usage.toLocaleString("en-us")} ${
              v.usage_type === "HR" ? "hs" : "kms"
            }`}
          />
        );
      })}
    </div>
  );
}

export default VehiclesList;
