import React, { useState } from "react";
import "./App.css";

import { useRoutes } from "react-router-dom";

import Login from "./components/Login";
import VehiclesRoute from "./components/VehiclesRoute";
import DriversRoute from "./components/DriversRoute";
import SettingsRoute from "./components/SettingsRoute";
import HelpRoute from "./components/HelpRoute";
import HomeRoute from "./components/HomeRoute";
import NewNavBar from "./components/NewNavBar";
import NewTopBar from "./components/NewTopBar";
import NotFound404 from "./components/NotFound404";

function App() {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "vehicles/*",
      element: <VehiclesRoute />,
    },
    {
      path: "drivers/*",
      element: <DriversRoute />,
    },
    {
      path: "settings",
      element: <SettingsRoute />,
    },
    {
      path: "help",
      element: <HelpRoute />,
    },
    { path: "*", element: <NotFound404 /> },
  ]);

  //  For collapsible meni
  // const [isOpenMenu, setIsOpenMenu] = useState(false);

  // function toggleMenu() {
  //   if (isOpenMenu) {
  //     setIsOpenMenu(false);
  //   } else {
  //     setIsOpenMenu(true);
  //   }
  // }

  return (
    <div
      className="fixed flex flex-col w-full h-full
                 bg-neutral-100"
    >
      <NewTopBar />
      <div className="fixed flex h-full w-full pt-10">
        <NewNavBar />
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
