import axios from "axios";
import React, { useEffect, useState } from "react";
import DriversList from "./DriversList";
import DriversToolbar from "./DriversToolbar";
import Loading from "./Loading";

function DriversRoute() {
  const [driversList, setDriversList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const resp = await axios.get("http://localhost:8000/drivers/");
    setDriversList(resp.data);
  }

  async function fetchFilteredData(queryParams) {
    let queryParamStr = "";
    for (const item of Object.keys(queryParams)) {
      if (queryParams[item] !== "") {
        queryParamStr += `${item}=${queryParams[item]}&`;
      }
    }
    const resp = await axios.get(
      `http://localhost:8000/drivers/?${queryParamStr}`
    );
    setDriversList(resp.data);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col py-16 px-24">
      <div>
        <DriversToolbar
          fetchFilteredData={fetchFilteredData}
          driversListLen={driversList.length}
        />
        <p className="italic text-sm text-neutral-600 mb-14 mt-2 ml-32">
          Showing {driversList.length} results
        </p>
      </div>
      <div className="container self-center">
        {isLoading ? <Loading /> : <DriversList driversList={driversList} />}
      </div>
    </div>
  );
}

export default DriversRoute;
