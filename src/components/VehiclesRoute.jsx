import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlusLg, BsTruck } from "react-icons/bs";
import Loading from "./Loading";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const resp = await axios.get("http://localhost:8000/vehicles/");
    setVehiclesList(resp.data);
  }

  async function fetchFilteredData(queryParams) {
    let queryParamStr = "";
    for (const item of Object.keys(queryParams)) {
      if (queryParams[item] !== "") {
        queryParamStr += `${item}=${queryParams[item]}&`;
      }
    }

    const resp = await axios.get(
      `http://localhost:8000/vehicles/?${queryParamStr}`
    );
    setVehiclesList(resp.data);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="flex items-center
      mr-16 mb-8 mt-6"
      >
        <BsTruck size={40} className="text-neutral-600" />
        <h1 className="text-2xl font-bold text-neutral-600 ml-8">Vehicles</h1>
      </div>

      <div
        className="flex flex-col bg-neutral-100 rounded-2xl
       shadow-lg"
      >
        <div>
          <VehiclesToolbar
            fetchFilteredData={fetchFilteredData}
            vehiclesListLen={vehiclesList.length}
          />
        </div>
        <div className="container self-center pb-8">
          {isLoading ? (
            <Loading />
          ) : (
            <VehiclesList vehiclesList={vehiclesList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VehiclesRoute;
