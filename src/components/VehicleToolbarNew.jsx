import axios from "axios";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function VehicleToolbarNew() {
  const [license, setLicense] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [usageType, setUsageType] = useState("");
  const [usage, setUsage] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const usageTypes = [
    { apiName: 0, humanName: "--" },
    { apiName: "KM", humanName: "Kms" },
    { apiName: "HR", humanName: "Hrs" },
  ];

  const statuses = [
    { apiName: 0, humanName: "Select a status" },
    { apiName: "AC", humanName: "Active" },
    { apiName: "MA", humanName: "Maintenance" },
    { apiName: "TA", humanName: "Repairs" },
    { apiName: "IN", humanName: "Inactive" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const postBody = {
      license_plate: license,
      model,
      status,
      usage_type: usageType,
      usage,
      notes,
    };
    axios
      .post("http://localhost:8000/vehicles/", postBody)
      .then(navigate(0))
      .catch((err) => console.error(err));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container w-full mt-8 pb-6 flex flex-col space-y-4"
    >
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            License
          </label>
          <input
            type="text"
            onChange={(e) => setLicense(e.target.value)}
            className="px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             w-40 focus:border-transparent focus:outline-none"
            placeholder="SOF1696..."
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Model
          </label>
          <input
            type="text"
            onChange={(e) => setModel(e.target.value)}
            className="px-4 py-1 rounded-lg bg-neutral-200
             text-neutral-800 placeholder:text-neutral-500
             focus:border-transparent focus:outline-none"
            placeholder="Scania P410X.."
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Status
          </label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="px-6 py-2 rounded-lg bg-neutral-200
             text-neutral-800 hover:bg-neutral-300"
          >
            {statuses.map((item) => {
              return (
                <option key={item.apiName} value={item.apiName}>
                  {item.humanName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="relative flex space-x-10">
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Usage
          </label>
          <div className="flex relative">
            <input
              type="text"
              onChange={(e) => setUsage(e.target.value)}
              className="px-4 py-1 rounded-l-lg bg-neutral-200
                 text-neutral-800 placeholder:text-neutral-500
                 w-48 focus:border-transparent focus:outline-none"
              placeholder="Usage in km or h"
            />
            <select
              onChange={(e) => setUsageType(e.target.value)}
              className="px-6 py-1 rounded-r-lg bg-neutral-200
             text-neutral-800 hover:bg-neutral-300 border-l-2 border-neutral-300"
            >
              {usageTypes.map((item) => {
                return (
                  <option key={item.apiName} value={item.apiName}>
                    {item.humanName}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            className="absolute bottom-0 right-0 py-4 px-4 rounded-full bg-red-300 hover:bg-red-400"
          >
            <BsPlus />
          </button>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="license"
            className="ml-2 mb-1 text-sm text-neutral-600"
          >
            Notes
          </label>
          <div className="flex">
            <input
              type="text"
              onChange={(e) => setNotes(e.target.value)}
              className="px-4 py-1 w-full rounded-lg bg-neutral-200
               text-neutral-800 placeholder:text-neutral-500
               focus:border-transparent focus:outline-none"
              placeholder="Add custom notes here..."
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default VehicleToolbarNew;
