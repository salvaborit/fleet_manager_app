import React from "react";
import {
  BsTruck,
  BsPeople,
  BsFileEarmarkText,
  BsGear,
  BsArrowBarLeft,
  BsListUl,
  BsPlus,
} from "react-icons/bs";
import NavItem from "./NavItem";
import NavItemOpen from "./NavItemOpen";

function NavBar({ isOpenMenu }) {
  const navIconSize = 25;
  const primNavItems = [
    {
      name: "Vehicles",
      route: "/vehicles",
      icon: <BsTruck size={navIconSize} />,
      actions: [
        {
          title: "View all",
          icon: <BsListUl />,
          route: "/vehicles",
        },
        {
          title: "New vehicle",
          icon: <BsPlus />,
          route: "/vehicles/new",
        },
      ],
    },
    {
      name: "Drivers",
      route: "/drivers",
      icon: <BsPeople size={navIconSize} />,
      actions: [
        {
          title: "View all",
          icon: <BsListUl />,
          route: "/drivers",
        },
        {
          title: "New driver",
          icon: <BsPlus />,
          route: "/drivers/new",
        },
      ],
    },
    {
      name: "Docs",
      route: "/documentations",
      icon: <BsFileEarmarkText size={navIconSize} />,
      actions: [
        {
          title: "Vehicles",
          icon: <BsTruck />,
          route: "/documentations/vehicles",
        },
        {
          title: "Drivers",
          icon: <BsPeople />,
          route: "/documentations/drivers",
        },
      ],
    },
  ];
  const secNavItems = [
    {
      name: "Settings",
      route: "/settings",
      icon: <BsGear size={navIconSize} />,
    },
    {
      name: "Logout",
      route: "/",
      icon: <BsArrowBarLeft size={navIconSize} />,
    },
  ];

  // OPEN MENU
  if (isOpenMenu) {
    return (
      <div
        className="flex flex-col justify-between items-center self-center
                 h-full bg-gray-200 py-4"
      >
        <div className="flex flex-col space-y-4 rounded-xl">
          {primNavItems.map((item) => {
            return (
              <NavItemOpen
                key={item.route}
                name={item.name}
                route={item.route}
                icon={item.icon}
                actions={item.actions}
              />
            );
          })}
        </div>
        <div className="flex flex-col space-y-4">
          {secNavItems.map((item) => {
            return (
              <NavItemOpen
                key={item.route}
                route={item.route}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    // COLLAPSED MENU
    return (
      <div
        className="flex flex-col justify-between items-center self-center
                 h-full bg-gray-200 px-1 py-4"
      >
        <div className="flex flex-col space-y-2 rounded-xl">
          {primNavItems.map((item) => {
            return (
              <NavItem
                key={item.route}
                name={item.name}
                route={item.route}
                icon={item.icon}
              />
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          {secNavItems.map((item) => {
            return (
              <NavItem
                key={item.route}
                route={item.route}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;
