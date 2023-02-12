import React from "react";
import { BsQuestion, BsSearch } from "react-icons/bs";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function TopBar({ isOpenMenu, toggleMenu }) {
  const iconSize = 20;
  return (
    <div className="relative w-full bg-gray-200 flex flex-row items-center justify-between px-5">
      <div
        className="rounded-full p-2 text-gray-600 hover:bg-gray-300"
        onClick={toggleMenu}
      >
        {isOpenMenu ? <FiX size={iconSize} /> : <FiMenu size={iconSize} />}
      </div>
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-3xl py-2 px-8 h-8 my-2 bg-gray-300"
        />
        <div
          className="w-12 h-8 rounded-r-full bg-gray-300
         hover:bg-gray-400 hover:text-neutral-50
         flex items-center justify-center"
        >
          <BsSearch />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3">
        <Link
          to={"/help"}
          className="rounded-full p-2 text-gray-600 hover:bg-gray-300"
        >
          <BsQuestion size={iconSize} />
        </Link>
        <div className="rounded-full p-2 text-gray-600 bg-gray-300">
          <FiUser size={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
