import React from "react";
import { useRoutes } from "react-router-dom";
import DriverDetailView from "./DriverDetailView";
import DriverListView from "./DriverListView";

function DriversRoute() {
  const routes = useRoutes([
    { path: "/", element: <DriverListView /> },
    { path: "/:id", element: <DriverDetailView /> },
  ]);
  return (
    <>
      <div className="w-full h-full flex flex-col">{routes}</div>
    </>
  );
}

export default DriversRoute;
