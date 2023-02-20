import React, { useState } from "react";
import { BsPlusCircle, BsSliders } from "react-icons/bs";
import DriverToolbarFilters from "./DriverToolbarFilters";
import DriverToolbarNew from "./DriverToolbarNew";
import ToolbarButton from "./ToolbarButton";

function DriversToolbar({ fetchFilteredData, driversListLen }) {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    {
      name: "filter",
      title: "Filters",
      icon: <BsSliders />,
      dropdown: <DriverToolbarFilters fetchFilteredData={fetchFilteredData} />,
    },
    {
      name: "add",
      title: "Add Driver",
      icon: <BsPlusCircle />,
      dropdown: <DriverToolbarNew />,
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
    <div className="flex flex-col mt-2 px-32 border-neutral-400 border-b-2 pb-3">
      <div className="w-full flex items-end space-x-2">
        <h1 className="text-5xl mr-16 mb-1 font-bold">Drivers</h1>
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

export default DriversToolbar;
