import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const useEstimatedOutput = () => {
    const [status, setStatus] = useState("Loading...");
  
    useEffect(() => {
        const handleGetStatus = (status) => {
            // console.log("Received estimated status:", status);
            setStatus(status);
        }

        socket.on("statusUpdate", handleGetStatus);
  
        return () => {
            socket.off("statusUpdate", handleGetStatus);
        };
    }, [status]);
  
    return status;
};