import { io } from "socket.io-client";

const socket = io("http://localhost:5002");

socket.on("connect", () => {
  console.log("Socket.IO connection opened");
});

socket.on("dataUpdate", (data) => {
  // console.log('Received data update from server:', data);
  // Update your UI or perform actions with the received data
});

socket.on("disconnect", () => {
  console.log("Socket.IO connection closed");
});

socket.on("error", (error) => {
  console.error("Socket.IO error:", error);
});

export default socket;
