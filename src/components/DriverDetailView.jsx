import React, { useState } from "react";
import { TbTruck } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

function DriverDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="flex items-center mr-16 mb-8 mt-6">
        <TbTruck size={40} className="text-neutral-500" />
        <h1 className="text-2xl font-bold text-neutral-500 ml-8">Vehicles</h1>
      </div>

      <div className="flex flex-col bg-neutral-50 rounded-2xl shadow-lg"></div>
      {isLoading && <Loading />}
    </>
  );
}

export default DriverDetailView;
