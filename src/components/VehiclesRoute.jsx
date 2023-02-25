import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbTruck } from "react-icons/tb";
import { useRoutes } from "react-router-dom";
import Loading from "./Loading";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute({ isOpenNew }) {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const routes = useRoutes([
  //   {path: '/',
  // element: < />}
  // ])

  async function fetchData() {
    setIsLoading(true);
    const resp = await axios.get("http://localhost:8000/vehicles/");
    setVehiclesList(resp.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchFilteredData(queryParams) {
    let queryParamStr = "";
    for (const item of Object.keys(queryParams)) {
      if (queryParams[item] !== "") {
        queryParamStr += `${item}=${queryParams[item]}&`;
      }
    }
    setIsLoading(true);
    const resp = await axios.get(
      `http://localhost:8000/vehicles/?${queryParamStr}`
    );
    setVehiclesList(resp.data);
    setIsLoading(false);
  }

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex items-center mr-16 mb-8 mt-6">
          <TbTruck size={40} className="text-neutral-500" />
          <h1 className="text-2xl font-bold text-neutral-500 ml-8">Vehicles</h1>
        </div>

        <div className="flex flex-col bg-neutral-50 rounded-2xl shadow-lg">
          <div>
            <VehiclesToolbar
              fetchFilteredData={fetchFilteredData}
              isLoading={isLoading}
            />
          </div>
          <div className="container self-center pb-8">
            {!isLoading && <VehiclesList vehiclesList={vehiclesList} />}
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
}

export default VehiclesRoute;
