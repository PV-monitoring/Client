import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const useDynamicPlants = () => {
    const [plants, setPlants] = useState([]);
  
    useEffect(() => {
        const handlePlantUpdates = (data) => {
            // console.log("Received plant data:", data);
            setPlants(data);
        }

        socket.on("plantsUpdate", handlePlantUpdates);
  
        return () => {
            socket.off("plantsUpdate", handlePlantUpdates);
        };
    }, []);
  
    return getMockDataInvoices(plants);
};

const getMockDataInvoices = (dynamicPlants) => {
    const transformedData = dynamicPlants.map((plant) => ({
        id: plant.plant_id,
        name: plant.plant_name || plant.plantname,
        capacity: plant.capacity || plant.pv_capacity,
        power: plant.pac,
        status: getStatusString(plant.status),
        location: plant.address,
        created_time: plant.create_time,
        plant_type: plant.plant_type,
        to_hour: plant.to_hour,
        eday: plant.eday,
        total: plant.total,
        isowner: plant.isowner,
    }));

    return transformedData;
};

const getStatusString = (status) => {
    switch (status) {
        case -1:
            return "Offline";
        case 0:
            return "Waiting";
        case 1:
            return "Generating";
        case 2:
            return "Fault";
        default:
            return status;
    }
};