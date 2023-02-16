import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavItemOpen({ name, icon, route, actions }) {
  const location = useLocation();

  return (
    <li className="flex flex-col">
      <div>
        <Link
          to={route}
          className="relative flex text-center items-center
              align-center rounded-lg px-3 py-1 mx-3 w-44
              text-neutral-600 hover:bg-neutral-300"
        >
          {icon}
          <p className="text-base ml-4">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </Link>
      </div>
      <ul className="flex flex-col mt-2">
        {actions &&
          actions.map((action) => {
            return (
              <Link to={action.route} key={action.route}>
                <li
                  className={`flex space-x-4 mx-8 ml-6 px-2 py-1 text-sm
                items-center mb-1 hover:bg-neutral-300 rounded-lg
                ${location.pathname === action.route && "bg-red-300"}`}
                >
                  <div>{action.icon}</div>
                  <div>{action.title}</div>
                </li>
              </Link>
            );
          })}
      </ul>
    </li>
  );
}

export default NavItemOpen;
