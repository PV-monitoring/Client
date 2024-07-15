import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const useCleaningCycleUpdate = () => {
    const [cleaningCycle, setCleaningCycle] = useState("Loading...");
  
    useEffect(() => {
        const handleCleaningCycleUpdate = (status) => {
            // console.log("Received estimated status:", status);
            setCleaningCycle(status);
        }

        socket.on("cleaningCycleUpdate", handleCleaningCycleUpdate);
  
        return () => {
            socket.off("cleaningCycleUpdate", handleCleaningCycleUpdate);
        };
    }, [cleaningCycle]);
  
    return cleaningCycle;
};