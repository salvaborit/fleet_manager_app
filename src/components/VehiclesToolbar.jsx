import React, { useState } from "react";

import { BsPlusCircle, BsSliders } from "react-icons/bs";

import ToolbarButton from "./ToolbarButton";
import VehicleToolbarFilters from "./VehicleToolbarFilters";
import VehicleToolbarNew from "./VehicleToolbarNew";

function VehiclesToolbar({ fetchFilteredData }) {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    {
      name: "filter",
      title: "Filters",
      icon: <BsSliders />,
      dropdown: <VehicleToolbarFilters fetchFilteredData={fetchFilteredData} />,
    },
    {
      name: "add",
      title: "Add Vehicle",
      icon: <BsPlusCircle />,
      dropdown: <VehicleToolbarNew />,
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
    <div className="flex flex-col mb-14 px-32 border-neutral-400 border-b-2 pb-1">
      <div className="w-full flex items-end space-x-2">
        <h1 className="text-5xl mr-16 mb-1 font-bold">Vehicles</h1>
        <div className="flex space-x-2">
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
        </div>
      </div>
      {activeButton && activeButton.dropdown}
    </div>
  );
}

export default VehiclesToolbar;
