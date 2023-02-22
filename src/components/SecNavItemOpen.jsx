import React from "react";
import { Link, useLocation } from "react-router-dom";

function SecNavItemOpen({ name, icon, route }) {
  const location = useLocation();

  return (
    <Link to={route}>
      <li className="flex flex-col">
        <button
          className={`relative flex text-center items-center align-center rounded-lg
               px-3 py-1 mx-3 w-44 hover:text-blue-400 ${
                 location.pathname === route
                   ? "text-blue-400"
                   : "text-neutral-500"
               }`}
        >
          {icon}
          <p className="text-base ml-4 font-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </button>
      </li>
    </Link>
  );
}

export default SecNavItemOpen;
