import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ name, icon, route }) {
  const location = useLocation();

  return (
    <Link to={route}>
      <li
        className={`flex flex-col items-center justify-center
    rounded-lg p-3 text-neutral-600 hover:bg-red-200 relative
    ${location.pathname.split("/")[1] === name && "bg-red-300"}`}
      >
        {icon}
        <p className="text-xs mt-1">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </li>
    </Link>
  );
}

export default NavItem;
