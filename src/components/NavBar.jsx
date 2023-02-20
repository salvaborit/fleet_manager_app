import React from "react";
import {
  BsTruck,
  BsPeople,
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

  return (
    <nav
      className="fixed flex flex-col justify-between items-center self-center
                 h-full bg-neutral-100 pb-4 pt-20 shadow-lg"
    >
      <ul className="flex flex-col space-y-4 rounded-xl">
        {primNavItems.map((item) => {
          if (isOpenMenu) {
            return (
              <NavItemOpen
                key={item.route}
                name={item.name}
                route={item.route}
                icon={item.icon}
                actions={item.actions}
              />
            );
          } else {
            return (
              <NavItem
                key={item.route}
                name={item.name}
                route={item.route}
                icon={item.icon}
              />
            );
          }
        })}
      </ul>
      <ul className="flex flex-col space-y-4 pr-1">
        {secNavItems.map((item) => {
          if (isOpenMenu) {
            return (
              <NavItemOpen
                key={item.route}
                route={item.route}
                icon={item.icon}
                name={item.name}
              />
            );
          } else {
            return (
              <NavItem
                key={item.route}
                route={item.route}
                icon={item.icon}
                name={item.name}
              />
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
