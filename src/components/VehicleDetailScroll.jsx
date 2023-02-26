import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import DocsModalListItem from "./DocsModalListItem";
import Loading from "./Loading";
import NewDocModal from "./NewDocModal";
import VehicleDocsListItem from "./VehicleDocsListItem";

function VehicleDetailScroll() {
  const { id } = useParams();

  const [docsList, setDocsList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const respDocs = await axios.get(
      `http://localhost:8000/vehicle-docs/?vehicle=${id}`
    );
    setDocsList(respDocs.data);
    const respVehicles = await axios.get("http://localhost:8000/vehicles/");
    setVehicleList(respVehicles.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [isOpenNewModal, setIsOpenNewModal] = useState(false);
  function toggleNewModal() {
    setIsOpenNewModal(!isOpenNewModal);
  }

  if (isLoading) return <Loading />;
  else
    return (
      <div className="max-h-full w-8/12 m-8 overflow-y-auto">
        <div className="flex justify-between">
          <p className="text-2xl font-bold ml-4">Documentations</p>
          <button
            type="submit"
            onClick={toggleNewModal}
            className="flex items-center justify-center mr-4
             px-4 rounded-xl space-x-3 shadow-md font-bold border-2
            bg-blue-400 border-blue-400 text-neutral-50
            hover:bg-blue-500 hover:border-blue-500"
          >
            <BsPlusCircleFill /> <p>New</p>
          </button>
        </div>

        <div
          className="flex space-x-12 mb-1 items-center
                shadow-md mt-6 rounded-xl"
        >
          <table className="flex flex-col w-full bg-neutral-100 rounded-xl">
            <thead>
              <tr
                className="flex justify-between text-left mb-4 bg-neutral-200 py-3
                   text-neutral-600 shadow-inner rounded-t-xl"
              >
                <th className="w-2/5 pl-10 flex items-center">Title</th>
                <th className="w-1/6 pl-3 flex items-center justify-center">
                  Expiry
                </th>
                <th className="w-1/12 pl-5 flex items-center">Status</th>
                <th className="w-1/4 text-center pr-10">Actions</th>
              </tr>
            </thead>
            <tbody>
              {docsList &&
                docsList.map((item) => {
                  return (
                    <VehicleDocsListItem
                      docItem={item}
                      vehicleList={vehicleList}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <NewDocModal
          isOpen={isOpenNewModal}
          toggle={toggleNewModal}
          vehicleId={id}
        />
      </div>
    );
}
//
export default VehicleDetailScroll;
