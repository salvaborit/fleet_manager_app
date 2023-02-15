import axios from "axios";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

function VehicleToolbarFilters() {
  const [isLoading, setIsLoading] = useState(true);

  const usageTypes = [
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hs" },
  ];

  async function fetchData() {
    const rest = await axios.get("http://localhost:8000/vehicles/");
  }
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
      <form
        className=" container w-full mt-8 mb-10 flex items-center
    space-x-10 flex-wrap"
      >
        <input
          type="text"
          className="px-4 py-1 rounded-lg"
          placeholder="License"
        />
        <input
          type="text"
          className="px-4 py-1 rounded-lg"
          placeholder="Model"
        />
        <input
          type="text"
          className="px-4 py-1 rounded-lg"
          placeholder="Status"
        />
        <div>
          <input
            type="text"
            className="px-4 py-1 rounded-lg"
            placeholder="Usage"
          />
          <select>
            {usageTypes.map((item) => {
              return <option key={item.apiName}>{item.humanName}</option>;
            })}
          </select>
        </div>
      </form>
    );
  }
}

export default VehicleToolbarFilters;
