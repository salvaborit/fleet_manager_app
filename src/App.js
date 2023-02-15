import React, { useState } from "react";
import "./App.css";

import { useRoutes } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import VehiclesRoute from "./components/VehiclesRoute";
import DriversRoute from "./components/DriversRoute";
import DocumentationsRoute from "./components/DocumentationsRoute";
import SettingsRoute from "./components/SettingsRoute";
import HelpRoute from "./components/HelpRoute";
import HomeRoute from "./components/HomeRoute";
import TopBar from "./components/TopBar";
import VehicleToolbarFilters from "./components/VehicleToolbarFilters";

function App() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
      children: [],
    },
    {
      path: "/",
      element: <HomeRoute />,
      children: [],
    },
    {
      path: "/vehicles",
      element: <VehiclesRoute />,
      children: [
        {
          path: "/vehicles/filters",
          element: (
            <VehiclesRoute toolbarDropdown={<VehicleToolbarFilters />} />
          ),
        },
        {
          path: "/vehicles/new",
          element: <VehiclesRoute toolbarDropdown={<></>} />,
        },
      ],
    },
    {
      path: "/drivers",
      element: <DriversRoute />,
      children: [],
    },
    {
      path: "/documentations",
      element: <DocumentationsRoute />,
      children: [
        {
          path: "/documentations/vehicles",
          element: "",
        },
        {
          path: "/documentations/drivers",
          element: "",
        },
      ],
    },
    {
      path: "/settings",
      element: <SettingsRoute />,
      children: [],
    },
    {
      path: "/help",
      element: <HelpRoute />,
      children: [],
    },
  ]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    } else {
      setIsOpenMenu(true);
    }
  }

  return (
    <div
      className="w-screen h-screen
                 bg-neutral-100 flex flex-col"
    >
      <TopBar isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
      <div className="w-full h-full flex">
        <NavBar isOpenMenu={isOpenMenu} />
        {routes}
      </div>
    </div>
  );
}

export default App;
