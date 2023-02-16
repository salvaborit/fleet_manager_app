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
      name: "vehicles",
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
      name: "drivers",
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
      name: "docs",
      route: "/docs",
      icon: <BsFileEarmarkText size={navIconSize} />,
      actions: [
        {
          title: "Vehicles",
          icon: <BsTruck />,
          route: "/docs/vehicles",
        },
        {
          title: "Drivers",
          icon: <BsPeople />,
          route: "/docs/drivers",
        },
      ],
    },
  ];
  const secNavItems = [
    {
      name: "settings",
      route: "/settings",
      icon: <BsGear size={navIconSize} />,
    },
    {
      name: "logout",
      route: "/",
      icon: <BsArrowBarLeft size={navIconSize} />,
    },
  ];

  // OPEN MENU
  if (isOpenMenu) {
    return (
      <nav
        className="flex flex-col justify-between items-center self-center
                 h-full bg-neutral-200 py-4"
      >
        <ul className="flex flex-col space-y-4 rounded-xl">
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
        </ul>
        <ul className="flex flex-col space-y-4 pr-1">
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
        </ul>
      </nav>
    );
  } else {
    // COLLAPSED MENU
    return (
      <nav
        className="flex flex-col justify-between items-center self-center
                 h-full bg-neutral-200 px-1 py-4"
      >
        <ul className="flex flex-col space-y-2 rounded-xl">
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
        </ul>
        <ul className="flex flex-col space-y-2">
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
        </ul>
      </nav>
    );
  }
}

export default NavBar;
