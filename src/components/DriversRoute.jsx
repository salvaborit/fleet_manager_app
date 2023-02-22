import axios from "axios";
import React, { useEffect, useState } from "react";
import DriversList from "./DriversList";
import DriversToolbar from "./DriversToolbar";
import Loading from "./Loading";
import { TbUsers } from "react-icons/tb";

function DriversRoute() {
  const [driversList, setDriversList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    setIsLoading(true);
    const resp = await axios.get("http://localhost:8000/drivers/");
    setDriversList(resp.data);
    setIsLoading(false);
  }

  async function fetchFilteredData(queryParams) {
    let queryParamStr = "";
    for (const item of Object.keys(queryParams)) {
      if (queryParams[item] !== "") {
        queryParamStr += `${item}=${queryParams[item]}&`;
      }
    }
    setIsLoading(true);
    const resp = await axios.get(
      `http://localhost:8000/drivers/?${queryParamStr}`
    );
    setDriversList(resp.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex items-center mr-16 mb-8 mt-6">
          <TbUsers size={40} className="text-neutral-500" />
          <h1 className="text-2xl font-bold text-neutral-500 ml-8">Vehicles</h1>
        </div>

        <div className="flex flex-col bg-neutral-50 rounded-2xl shadow-lg">
          <div>
            <DriversToolbar
              fetchFilteredData={fetchFilteredData}
              isLoading={isLoading}
            />
          </div>
          <div className="container self-center pb-8">
            {!isLoading && <DriversList driversList={driversList} />}
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
}

export default DriversRoute;
