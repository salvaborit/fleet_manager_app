import React, { useState } from "react";
import "./App.css";

import { useRoutes } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import VehiclesRoute from "./components/VehiclesRoute";
import DriversRoute from "./components/DriversRoute";
import SettingsRoute from "./components/SettingsRoute";
import HelpRoute from "./components/HelpRoute";
import HomeRoute from "./components/HomeRoute";
import TopBar from "./components/TopBar";
import VehicleToolbarFilters from "./components/VehicleToolbarFilters";
import NewNavBar from "./components/NewNavBar";
import NewTopBar from "./components/NewTopBar";

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
      children: [],
    },
    {
      path: "/drivers",
      element: <DriversRoute />,
      children: [],
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
      className="fixed flex flex-col w-full h-full
                 bg-neutral-100"
    >
      <NewTopBar />
      <div className="fixed flex h-full w-full pt-10">
        <NewNavBar isOpenMenu={isOpenMenu} />
        <div
          className="w-full h-full bg-neutral-100 pl-10 pr-14
        overflow-y-auto max-w-full"
        >
          {routes}
        </div>
      </div>
    </div>
  );
}

export default App;
