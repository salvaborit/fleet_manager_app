import React from "react";
import DriversListItem from "./DriversListItem";

function DriversList({ driversList }) {
  const tableHeaders = [
    {
      title: "Name",
      styles: "w-4/12 ml-10",
    },
    {
      title: "Phone",
      styles: "w-2/12",
    },
    { title: "Email", styles: "w-3/12" },

    {
      title: "Actions",
      styles: "m-auto",
    },
  ];
  return (
    <table className="flex flex-col w-full mx-0">
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
        {driversList.map((driver) => {
          return <DriversListItem key={driver.id} driver={driver} />;
        })}
      </tbody>
    </table>
  );
}

export default DriversList;
