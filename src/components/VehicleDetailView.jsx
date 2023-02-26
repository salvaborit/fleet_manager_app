import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbChevronLeft, TbEdit, TbTrash, TbTruck } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import DeleteVehicleModal from "./DeleteVehicleModal";
import EditVehicleModal from "./EditVehicleModal";
import Loading from "./Loading";
import VehicleDetailScroll from "./VehicleDetailScroll";
import VehicleDetailSidePanel from "./VehicleDetailSidePanel";
import VehicleDetailViewTopBar from "./VehicleDetailViewTopBar";

function VehicleDetailView() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const resp = await axios.get(`http://localhost:8000/vehicles/${id}/`);
    setVehicle(resp.data);
    setIsLoading(false);
  }

  if (isLoading) return <Loading />;
  else
    return (
      <>
        <VehicleDetailViewTopBar vehicle={vehicle} />

        <div
          className="flex w-full h-5/6 top-24
          bg-neutral-50 rounded-2xl shadow-lg space-x-6"
        >
          <VehicleDetailSidePanel vehicle={vehicle} />
          <VehicleDetailScroll vehicle={vehicle} />
        </div>
      </>
    );
}

export default VehicleDetailView;
