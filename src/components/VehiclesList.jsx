import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  return (
    <div className="container w-full h-full flex flex-col items-center space-y-6 overflow-y-auto">
      {vehiclesList.map((vehicle) => {
        return <VehiclesListItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </div>
  );
}

export default VehiclesList;
