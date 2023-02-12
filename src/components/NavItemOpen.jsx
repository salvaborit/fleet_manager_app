import React from "react";
import { Link } from "react-router-dom";

function NavItemOpen({ name, icon, route, actions }) {
  return (
    <div className="flex flex-col">
      <div>
        <Link
          to={route}
          className="relative flex flex-row text-center items-center
              align-center rounded-lg px-3 py-1 mx-2 w-44
               text-gray-600 hover:bg-gray-300"
        >
          {icon}
          <p className="text-base ml-4">{name}</p>
        </Link>
      </div>
      <div className="flex flex-col mt-2">
        {actions &&
          actions.map((action) => {
            return (
              <Link
                to={action.route}
                key={action.route}
                className="flex flex-row space-x-4 mx-8 ml-6 px-2 text-sm
                items-center mb-1 hover:bg-gray-300 rounded-lg"
              >
                <div>{action.icon}</div>
                <div>{action.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default NavItemOpen;
