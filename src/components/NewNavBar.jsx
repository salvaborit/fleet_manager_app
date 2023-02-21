import React from "react";
import {
  BsArrowBarLeft,
  BsGear,
  BsListUl,
  BsPeople,
  BsPlus,
  BsTruck,
} from "react-icons/bs";
import NavItemOpen from "./NavItemOpen";

function NewNavBar() {
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
      className="flex flex-col justify-between items-center
                 bg-neutral-50 pb-4 pt-4 shadow-lg"
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
}

export default NewNavBar;
