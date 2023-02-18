import React, { useEffect, useState } from "react";
import axios from "axios";

import { VscLoading } from "react-icons/vsc";
import VehiclesListItem from "./VehiclesListItem";

function VehiclesList() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const resp = await axios.get("http://localhost:8000/vehicles/");
    setVehiclesList(resp.data);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="container w-full h-full flex items-center justify-center">
        <div className="animate-spin w-min h-min">
          <VscLoading size={40} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container w-full h-full flex flex-col space-y-4 overflow-y-auto">
        {vehiclesList.map((v) => {
          return (
            <VehiclesListItem
              key={v.id}
              license={v.license_plate}
              model={v.model}
              status={v.status}
              usage={`${v.usage.toLocaleString("en-us")} ${
                v.usage_type === "HR" ? "hs" : "kms"
              }`}
            />
          );
        })}
      </div>
    );
  }
}

export default VehiclesList;
