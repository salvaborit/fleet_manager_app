import React, { useState } from "react";
import { TbChevronDown, TbChevronRight } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import NewVehicleModal from "./NewVehicleModal";
import NewDriverModal from "./NewDriverModal";

function NavItemOpen({ name, icon, actions, showChevron }) {
  const location = useLocation();
  const [isOpenNewVehicleModal, setIsOpenNewVehicleModal] = useState(false);
  const [isOpenNewDriverModal, setIsOpenNewDriverModal] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  function toggleNewVehicleModal() {
    setIsOpenNewVehicleModal(!isOpenNewVehicleModal);
  }

  function toggleNewDriverModal() {
    setIsOpenNewDriverModal(!isOpenNewDriverModal);
  }

  function toggleDropdown() {
    setIsOpenDropdown(!isOpenDropdown);
  }

  function dropdownComponent() {
    return (
      <ul className="flex flex-col mt-2 text-neutral-500 font-bold">
        {actions &&
          actions.map((action) => {
            if (action.title === "New vehicle") {
              return (
                <button
                  key={action.title}
                  onClick={toggleNewVehicleModal}
                  className={`mx-8 ml-6 px-2 py-1 text-sm  mb-1 rounded-lg
                    hover:bg-neutral-300
                      ${location.pathname === action.route && ""}`}
                >
                  <li className="flex space-x-4 items-center">
                    <div>{action.icon}</div>
                    <div>{action.title}</div>
                  </li>
                </button>
              );
            } else if (action.title === "New driver") {
              return (
                <button
                  key={action.title}
                  onClick={toggleNewDriverModal}
                  className={`mx-8 ml-6 px-2 py-1 text-sm  mb-1 rounded-lg
                    hover:bg-neutral-300
                      ${location.pathname === action.route && ""}`}
                >
                  <li className="flex space-x-4 items-center">
                    <div>{action.icon}</div>
                    <div>{action.title}</div>
                  </li>
                </button>
              );
            }
            return (
              <Link to={action.route} key={action.route}>
                <li
                  className={`flex space-x-4 mx-8 ml-6 px-2 py-1 text-sm
                  items-center mb-1 rounded-lg hover:bg-neutral-300
                ${location.pathname === action.route && "bg-neutral-300"}`}
                >
                  <div>{action.icon}</div>
                  <div>{action.title}</div>
                </li>
              </Link>
            );
          })}
      </ul>
    );
  }

  return (
    <>
      <li className="flex flex-col">
        <button
          onClick={toggleDropdown}
          className={`relative flex text-center items-center align-center rounded-lg
           px-3 py-1 mx-3 w-44 hover:text-blue-400 ${
             isOpenDropdown ? "text-blue-400" : "text-neutral-500"
           }`}
        >
          {icon}
          <p className="text-base ml-4 font-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          {showChevron && (
            <div className="absolute right-3">
              {isOpenDropdown ? <TbChevronDown /> : <TbChevronRight />}
            </div>
          )}
        </button>
        {isOpenDropdown && name && dropdownComponent()}
      </li>
      <NewVehicleModal
        isOpen={isOpenNewVehicleModal}
        toggle={toggleNewVehicleModal}
      />
      <NewDriverModal
        isOpen={isOpenNewDriverModal}
        toggle={toggleNewDriverModal}
      />
    </>
  );
}

export default NavItemOpen;
