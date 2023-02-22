import React, { useState } from "react";
import {
  BsArrowBarLeft,
  BsGear,
  BsListUl,
  BsPeople,
  BsPlus,
  BsTruck,
} from "react-icons/bs";
import { TbTruck, TbUsers, TbListSearch, TbPlus } from "react-icons/tb";
import NavItemOpen from "./NavItemOpen";
import SecNavItemOpen from "./SecNavItemOpen";

function NewNavBar() {
  const navIconSize = 25;
  const primNavItems = [
    {
      name: "vehicles",
      route: "/vehicles",
      icon: <TbTruck size={navIconSize} />,
      actions: [
        {
          title: "View all",
          icon: <TbListSearch />,
          route: "/vehicles",
        },
        {
          title: "New vehicle",
          icon: <TbPlus />,
          route: "/vehicles",
        },
      ],
    },
    {
      name: "drivers",
      route: "/drivers",
      icon: <TbUsers size={navIconSize} />,
      actions: [
        {
          title: "View all",
          icon: <TbListSearch />,
          route: "/drivers",
        },
        {
          title: "New driver",
          icon: <TbPlus />,
          route: "/drivers",
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
    <>
      <nav
        className="flex flex-col justify-between items-center
                 bg-neutral-100 pb-4 pt-4 shadow-lg"
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
                showChevron={true}
              />
            );
          })}
        </ul>
        <ul className="flex flex-col space-y-4 pr-1">
          {secNavItems.map((item) => {
            return (
              <SecNavItemOpen
                key={item.route}
                route={item.route}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NewNavBar;
