import React from "react";
import DriversListItem from "./DriversListItem";

function DriversList({ driversList }) {
  return (
    <div className="container w-full h-full flex flex-col items-center space-y-6 overflow-y-auto">
      {driversList.map((driver) => {
        return <DriversListItem key={driver.id} driver={driver} />;
      })}
    </div>
  );
}

export default DriversList;
