import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbTruck } from "react-icons/tb";
import { useRoutes } from "react-router-dom";
import Loading from "./Loading";
import VehicleListView from "./VehicleListView";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute({ isOpenNew }) {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const routes = useRoutes([{ path: "/", element: <VehicleListView /> }]);

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
      <div className="w-full h-full flex flex-col">{routes}</div>
      {isLoading && <Loading />}
    </>
  );
}

export default VehiclesRoute;
