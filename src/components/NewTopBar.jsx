import React from "react";
import { BsQuestion, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";

function NewTopBar() {
  const iconSize = 20;
  return (
    <div
      className="z-20 w-full bg-neutral-50 flex items-center
    justify-between px-5"
    >
      <div className="flex items-center justify-center">
        <div className="rotate-45 font-bold text-blue-400 mr-2 mt-1">
          <TbManualGearbox />
        </div>
        <div className="font-bold text-neutral-500">fleet manager</div>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="z-10 rounded-l-3xl py-2 px-8 h-8 my-2 bg-neutral-200
          text-neutral-700"
        />
        <div
          className="w-12 h-8 rounded-r-full bg-neutral-200
         hover:bg-neutral-300
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

export default NewTopBar;
