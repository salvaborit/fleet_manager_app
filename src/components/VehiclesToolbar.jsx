import React, { useState } from "react";

import { BsPlusSquare, BsSliders } from "react-icons/bs";
import NewVehicleModal from "./NewVehicleModal";

import ToolbarButton from "./ToolbarButton";
import VehicleToolbarFilters from "./VehicleToolbarFilters";

function VehiclesToolbar({ fetchFilteredData }) {
  const [activeButton, setActiveButton] = useState(null);
  const [isOpenNewModal, setIsOpenNewModal] = useState(false);

  const buttons = [
    {
      name: "filter",
      title: "Filters",
      icon: <BsSliders />,
      dropdown: <VehicleToolbarFilters fetchFilteredData={fetchFilteredData} />,
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

  function toggleNewModal() {
    setIsOpenNewModal(!isOpenNewModal);
  }

  return (
    <div className="flex flex-col my-4 mx-4">
      <div className="flex justify-bet">
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
          className="absolute right-20 flex items-center justify-center
          py-1 px-4 rounded-lg space-x-3 shadow-md
          bg-blue-400 text-neutral-50
          hover:bg-blue-500"
        >
          <BsPlusSquare /> <p>Add</p>
        </button>
        <NewVehicleModal isOpen={isOpenNewModal} toggle={toggleNewModal} />
      </div>
      {activeButton && activeButton.dropdown}
    </div>
  );
}

export default VehiclesToolbar;
