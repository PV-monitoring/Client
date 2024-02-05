// websocket.js
const socket = new WebSocket('ws://localhost:3002');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened:', event);
});

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  if (message.event === 'dataUpdate') {
    console.log('Received data update from server:', message.data);
    // Update your UI or perform actions with the received data
  }
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});

socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

export default socket;
