import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import VehiclesList from "./VehiclesList";
import VehiclesToolbar from "./VehiclesToolbar";

function VehiclesRoute() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [areFiltersApplied, setAreFiltersApplied] = useState(false);

  async function fetchData() {
    const resp = await axios.get("http://localhost:8000/vehicles/");
    setAreFiltersApplied(false);
    setVehiclesList(resp.data);
  }

  async function fetchFilteredData(queryParams) {
    let queryParamStr = "";

    Object.keys(queryParams).map((item) => {
      if (queryParams[item] !== "") {
        if (item === "status") {
          // the value is Repair instead of TA
          // TODO: map to correct value
        } else if (item === "usage_type") {
          // the value is Hrs instead of HR
        }

        queryParamStr += `${item}=${queryParams[item]}&`;
      }
    });
    console.log(queryParamStr);

    const resp = await axios.get(
      `http://localhost:8000/vehicles/?${queryParamStr}`
    );
    setAreFiltersApplied(true);
    setVehiclesList(resp.data);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col py-16 px-24">
      <div>
        <VehiclesToolbar fetchFilteredData={fetchFilteredData} />
      </div>
      <div className="container self-center">
        {isLoading ? <Loading /> : <VehiclesList vehiclesList={vehiclesList} />}
      </div>
    </div>
  );
}

export default VehiclesRoute;
