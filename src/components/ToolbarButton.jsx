import React from "react";

function ToolbarButton({ btn, toggleDropdown, activeButton }) {
  return (
    <button
      onClick={() => toggleDropdown(btn)}
      className={`flex items-center justify-center bg-neutral-400 border-neutral-400
       px-4 py-1 space-x-2 rounded-xl shadow-md text-neutral-50 font-bold
       border-2 hover:bg-neutral-500 hover:border-neutral-500
       ${
         activeButton &&
         activeButton.name === btn.name &&
         "bg-neutral-50 text-neutral-500 hover:text-neutral-50"
       }`}
    >
      {btn.icon}
      <p>{btn.title}</p>
    </button>
  );
}

export default ToolbarButton;
