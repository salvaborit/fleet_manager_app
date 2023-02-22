import React, { useState } from "react";

import { BsFilterCircleFill, BsPlusCircleFill } from "react-icons/bs";
import NewVehicleModal from "./NewVehicleModal";

import ToolbarButton from "./ToolbarButton";
import VehicleToolbarFilters from "./VehicleToolbarFilters";

function VehiclesToolbar({
  fetchFilteredData,
  vehiclesListLen,
  totalVehicleCount,
  isLoading,
}) {
  const [activeButton, setActiveButton] = useState(null);
  const [isOpenNewModal, setIsOpenNewModal] = useState(false);

  function toggleNewModal() {
    setIsOpenNewModal(!isOpenNewModal);
  }

  const buttons = [
    {
      name: "filter",
      title: "Filters",
      icon: <BsFilterCircleFill />,
      dropdown: (
        <VehicleToolbarFilters
          fetchFilteredData={fetchFilteredData}
          isLoading={isLoading}
        />
      ),
    },
  ];

  function toggleDropdown(btn) {
    if (activeButton) {
      if (btn.name === activeButton.name) {
        setActiveButton(null);
      } else {
        setActiveButton(btn);
      }
    } else {
      setActiveButton(btn);
    }
  }

  return (
    <div className="relative flex flex-col my-4 mx-4">
      <div className="flex justify-between">
        {buttons.map((btn) => {
          return (
            <ToolbarButton
              key={btn.name}
              btn={btn}
              toggleDropdown={toggleDropdown}
              activeButton={activeButton}
            />
          );
        })}
        <button
          type="submit"
          onClick={toggleNewModal}
          className=" right-20 flex items-center justify-center
          py-1 px-4 rounded-xl space-x-3 shadow-md font-bold border-2
          bg-blue-400 border-blue-400 text-neutral-50
          hover:bg-blue-500 hover:border-blue-500"
        >
          <BsPlusCircleFill /> <p>Add</p>
        </button>
        <NewVehicleModal isOpen={isOpenNewModal} toggle={toggleNewModal} />
      </div>
      {activeButton && activeButton.dropdown}
    </div>
  );
}

export default VehiclesToolbar;
