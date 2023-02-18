import React from "react";
import { BsQuestion, BsSearch } from "react-icons/bs";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function TopBar({ isOpenMenu, toggleMenu }) {
  const iconSize = 20;
  return (
    <div className="z-10 fixed w-full bg-neutral-200 flex items-center justify-between px-5">
      <div
        className="rounded-full p-2 text-neutral-600 hover:bg-neutral-300"
        onClick={toggleMenu}
      >
        {isOpenMenu ? <FiX size={iconSize} /> : <FiMenu size={iconSize} />}
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="z-10 rounded-l-3xl py-2 px-8 h-8 my-2 bg-neutral-300"
        />
        <div
          className="w-12 h-8 rounded-r-full bg-neutral-300
         hover:bg-neutral-400 hover:text-neutral-50
         flex items-center justify-center"
        >
          <BsSearch />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Link
          to={"/help"}
          className="rounded-full p-2 text-neutral-600 hover:bg-neutral-300"
        >
          <BsQuestion size={iconSize} />
        </Link>
        <div className="rounded-full p-2 text-neutral-600 bg-neutral-300">
          <FiUser size={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
