import React from "react";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute() {
  return (
    <div className="w-full h-full flex flex-col mx-10 my-6">
      <div>
        <VehiclesToolbar />
      </div>
      <div>
        <VehiclesList />
      </div>
    </div>
  );
}

export default VehiclesRoute;
