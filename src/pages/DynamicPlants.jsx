import React, { useState, useEffect } from 'react';
import socket from '../utils/socket.js';

const DynamicPlantPage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your server should emit a 'plantsData' event when there's new data
        socket.on('dataUpdate', (data) => {
          console.log('Received plant data:', data);
          setPlants(data);
        });
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean up event listeners on component unmount
      socket.off('dataUpdate');
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='text-white'>
      <h1>Plants</h1>
      <table>
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Plant ID</th>
            <th>Capacity</th>
            <th>Address</th>
            <th>Created Time</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.plant_id}>
              <td>{plant.plant_name}</td>
              <td>{plant.plant_id}</td>
              <td>{plant.capacity}</td>
              <td>{plant.address}</td>
              <td>{plant.create_time}</td>
              <td>{plant.status}</td>
              <td>{plant.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicPlantPage;
