import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const useJoinPlantRoom = (plantName, plantId) => {
    const [inverters, setInverters] = useState([]);

    useEffect(() => {
        const joinRoom = () => {
            if (plantId) {
                console.log(`joining plant room: ${plantId}`);
                socket.emit("joinPlantRoom", plantId);
            }
        }

        joinRoom();

        
        try {
            socket.on("connect", () => {
                console.log("reconnected to socket");
                joinRoom();
            });
            // Your server should emit a 'invertersUpdate' event when there's new data
            socket.on("invertersUpdate", (data) => {
            //   console.log("Received inverter data:", data);
              setInverters(data);
            });
        } catch (error) {
            console.error("Error fetching inverter data:", error);
        }

        return () => {
            socket.off("invertersUpdate");
        };
    }, [plantId]);

    return getInvertersData(plantName, inverters);

};

// { id: 1, name: "Inverter 1", SN: "SN1", power: 50, daily: 10, monthly: 300, total: 500 }

const getInvertersData = (plantName, dynamicInverters) => {
    const transformedData = dynamicInverters.map((inverter) => ({
        id: plantName + " - " + inverter.id,
        invertersn: inverter.invertersn,
        status: getStatusString(inverter.status),
        power: inverter.pv_power,
        daily: inverter.daily_generation,
        total: inverter.total_generation,
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