import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  return (
    <div className="container w-full h-full flex flex-col space-y-4 overflow-y-auto">
      {vehiclesList.map((vehicle) => {
        return <VehiclesListItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </div>
  );
}

export default VehiclesList;
