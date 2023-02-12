import React from "react";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute() {
  return (
    <div className="w-full h-full flex flex-col py-16 px-24">
      <div>
        <VehiclesToolbar />
      </div>
      <div className="container self-center">
        <VehiclesList />
      </div>
    </div>
  );
}

export default VehiclesRoute;
