import React from "react";

function ToolbarButton({ btn, toggleDropdown, activeButton }) {
  return (
    <button
      onClick={() => toggleDropdown(btn)}
      className={`flex items-center justify-center hover:bg-red-200
       px-4 py-1 space-x-2 rounded-full
       ${activeButton && activeButton.name === btn.name && "bg-red-200"}`}
    >
      {btn.icon}
      <p>{btn.title}</p>
    </button>
  );
}

export default ToolbarButton;
