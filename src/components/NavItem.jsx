import React from "react";
import { Link } from "react-router-dom";

function NavItem({ name, icon, route }) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={route}
      className="flex flex-col text-center items-center align-center relative rounded-lg p-3 text-gray-600 hover:bg-gray-300"
      // onMouseEnter={setIsHovered(true)}
      // onMouseLeave={setIsHovered(false)}
    >
      {icon}
      <p className="text-xs mt-1">{name}</p>
    </Link>
  );
}

export default NavItem;
