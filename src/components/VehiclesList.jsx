import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  return (
    <table
      className="flex flex-col
    overflow-y-auto"
    >
      {vehiclesList.map((vehicle) => {
        return <VehiclesListItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </table>
  );
}

export default VehiclesList;
