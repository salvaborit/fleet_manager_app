import React, { useEffect, useState } from "react";
import axios from "axios";

import { VscLoading } from "react-icons/vsc";

function VehiclesList() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("http://localhost:8000/vehicles/", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      setVehiclesList(resp.data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin w-min h-min">
          <VscLoading size={40} />
        </div>
      </div>
    );
  }
  return (
    <>
      <table className="w-full border-black border-2">
        <thead>
          <tr>
            <td className="border-black border-2">License</td>
            <td className="border-black border-2">Model</td>
            <td className="border-black border-2">Status</td>
            <td className="border-black border-2">Usage type</td>
            <td className="border-black border-2">Usage</td>
          </tr>
        </thead>
        <tbody>
          {vehiclesList.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.license_plate}</td>
                <td>{v.model}</td>
                <td>{v.status}</td>
                <td>{v.usage_type}</td>
                <td>{v.usage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default VehiclesList;
