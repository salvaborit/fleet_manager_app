import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./Loading";
import DocsModalListItem from "./DocsModalListItem";
import { BsPlusCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import NewVehicleModal from "./NewVehicleModal";

function VehicleDocumentationsModal({ isOpen, toggle, vehicle }) {
  // function renderStatus() {
  //   const statusName = STATUSES[vehicle.status];
  //   let styles = "";
  //   if (statusName === STATUSES["AC"]) {
  //     styles = "bg-green-200 border-green-400 text-green-800";
  //   } else if (statusName === STATUSES["MA"] || statusName === STATUSES["TA"]) {
  //     styles = "bg-yellow-200 border-yellow-400 text-yellow-800";
  //   } else {
  //     styles = "bg-red-200 border-red-400 text-red-800";
  //   }

  //   return (
  //     <p
  //       className={`${styles} font-bold rounded-lg px-2 py-1 w-full text-center
  //       text-sm overflow-hidden`}
  //     >
  //       {statusName}
  //     </p>
  //   );
  // }

  const [docsList, setDocsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenNewModal, setIsOpenNewModal] = useState(false);

  function toggleNewModal() {
    setIsOpenNewModal(!isOpenNewModal);
  }

  async function fetchData() {
    const resp = await axios.get(
      `http://localhost:8000/vehicle-docs/?vehicle=${vehicle.id}`
    );
    setDocsList(resp.data);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [isOpen]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div
        className={`z-20 w-screen h-screen left-0 top-0 fixed py-20
    flex flex-col justify-center items-center bg-neutral-600/50 text-neutral-700
    ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className="relative bg-neutral-50 border-2 pt-10 w-2/3 max-h-4/5 rounded-xl
       border-neutral-500 flex flex-col text-neutral-700 overflow-y-auto"
        >
          <button
            onClick={toggle}
            className="absolute right-3 top-3 p-1 rounded-full bg-neutral-200
          hover:bg-neutral-300"
          >
            <RxCross2 />
          </button>
          <p className="text-4xl mb-2 font-bold ml-8">Documentations</p>
          <div className="relative flex ml-8">
            <div className="absolute right-6 bottom-6">
              <button
                type="submit"
                onClick={toggleNewModal}
                className="right-20 flex items-center justify-center
            py-1 px-4 rounded-xl space-x-3 shadow-md font-bold border-2
            bg-blue-400 border-blue-400 text-neutral-50
            hover:bg-blue-500 hover:border-blue-500"
              >
                <BsPlusCircleFill /> <p>New</p>
              </button>

              <NewVehicleModal
                isOpen={isOpenNewModal}
                toggle={toggleNewModal}
              />
            </div>
            <div>
              <p className="ml-1 text-sm italic font-bold text-neutral-500">
                License
              </p>
              <p className="text-xl mb-6">{vehicle.license_plate}</p>
            </div>
            <div>
              <p className="ml-1 text-sm italic font-bold text-neutral-500">
                Model
              </p>
              <p className="text-xl mb-6">{vehicle.model}</p>
            </div>
          </div>

          <div
            className="flex space-x-12 mb-10 bg-neutral-50 items-center
                shadow-md"
          >
            <table className="flex flex-col w-full">
              <thead>
                <tr
                  className="flex text-left mb-4 bg-neutral-200 py-3
                   text-neutral-600 shadow-inner"
                >
                  <th className="w-2/5 pl-10 flex items-center">Title</th>
                  <th className="w-1/5 flex items-center">Expiry</th>
                  <th className="w-1/6 flex items-center">Status</th>
                  <th className="w-auto pr-10 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {docsList &&
                  docsList.map((item) => {
                    return <DocsModalListItem docItem={item} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default VehicleDocumentationsModal;
