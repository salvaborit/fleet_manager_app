import React from "react";

function ViewDriverModal({ isOpen, toggle, driver }) {
  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 fixed
    flex justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-500 flex flex-col text-neutral-700"
      >
        <h1 className="text-4xl font-bold">
          {driver.first_name} {driver.last_name}
        </h1>
        <h2 className="text-2xl mb-6">{driver.birthdate}</h2>

        <div className="flex flex-col mb-4">
          <p className="ml-1 text-sm italic font-bold text-neutral-500">
            Contact info
          </p>
          <p className="text-2xl">{driver.phone}</p>
          <p className="text-2xl">{driver.email}</p>
          <p className="text-2xl">{driver.address}</p>
        </div>

        <div className="flex flex-col">
          <p className="ml-1 text-sm italic font-bold text-neutral-500">
            Identification
          </p>
          <h2 className="text-2xl mb-6">
            {driver.id_type} {driver.id_number}
          </h2>
        </div>

        <div className="flex mt-6">
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-400 text-neutral-50
            hover:bg-neutral-50 border-2 border-neutral-400 font-bold
            hover:text-neutral-500"
            onClick={toggle}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDriverModal;
