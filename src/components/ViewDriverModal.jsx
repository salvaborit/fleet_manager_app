import React from "react";

function ViewDriverModal({ isOpen, toggle, driver }) {
  return (
    <div
      className={`z-20 w-screen h-screen left-0 top-0 absolute
    flex flex-col justify-center items-center bg-neutral-600/50
    ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className="bg-neutral-50 border-2 px-16 py-10 rounded-xl
       border-neutral-600 flex flex-col"
      >
        <h1 className="text-4xl font-bold">
          {driver.first_name} {driver.last_name}
        </h1>
        <h2 className="text-2xl mb-6">{driver.birthdate}</h2>

        <div className="flex space-x-12">
          <div>
            <h3 className="pl-1 text-sm italic">Contact info</h3>
            <p className="text-2xl">{driver.address}</p>
            <p className="text-2xl">{driver.phone}</p>
            <p className="text-2xl">{driver.email}</p>
          </div>
          <div>
            <h3 className="pl-1 text-sm italic">Identification</h3>
            <h2 className="text-2xl mb-6">
              {driver.id_type} {driver.id_number}
            </h2>
          </div>
        </div>

        <div className="flex mt-6">
          <button
            className="mr-4 px-4 py-2 rounded-xl bg-neutral-100"
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
