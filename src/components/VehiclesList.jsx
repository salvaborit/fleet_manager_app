import React from "react";

import VehiclesListItem from "./VehiclesListItem";

function VehiclesList({ vehiclesList }) {
  const tableHeaders = [
    {
      title: "License",
      styles: "w-2/12 ml-10",
    },
    {
      title: "Model",
      styles: "w-4/12",
    },
    { title: "Usage", styles: "w-2/12" },
    {
      title: "Status",
      styles: "w-1/12 flex justify-center items-center",
    },
    {
      title: "Actions",
      styles: "m-auto",
    },
  ];
  return (
    <table className="flex flex-col w-full overflow-y-auto mx-0">
      <thead>
        <tr
          className="flex text-left mb-6 bg-neutral-200 py-3 text-neutral-600
        shadow-inner"
        >
          {tableHeaders.map((item) => {
            return (
              <th key={item.title} className={item.styles}>
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {vehiclesList.map((vehicle) => {
          return <VehiclesListItem key={vehicle.id} vehicle={vehicle} />;
        })}
      </tbody>
    </table>
  );
}

export default VehiclesList;
