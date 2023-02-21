import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  return (
    <table
      className="flex flex-col items-center justify-center
    overflow-y-auto"
    >
      {vehiclesList.map((vehicle) => {
        return <VehiclesListItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </table>
  );
}

export default VehiclesList;
