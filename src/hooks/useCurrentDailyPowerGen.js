import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const useCurrentDailyPowerGen = () => {
    const [currDailyPower, setCurrDailyPower] = useState(0);
  
    useEffect(() => {
        const handlePowerUpdate = (data) => {
            console.log("Received power data:", data);
            setCurrDailyPower(data);
        }

        socket.on("powerUpdate", handlePowerUpdate);
  
        return () => {
            socket.off("powerUpdate", handlePowerUpdate);
        };
    }, []);
  
    return currDailyPower;
};