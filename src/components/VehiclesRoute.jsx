import React from "react";
import { useRoutes } from "react-router-dom";
import VehicleDetailView from "./VehicleDetailView";
import VehicleListView from "./VehicleListView";

function VehiclesRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <VehicleListView />,
    },
    {
      path: "/:id",
      element: <VehicleDetailView />,
    },
  ]);

  return (
    <>
      <div className="relative w-full h-full flex flex-col text-neutral-700">
        {routes}
      </div>
    </>
  );
}

export default VehiclesRoute;
