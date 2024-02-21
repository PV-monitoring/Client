import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlantsData = () => {
  const [plants, setPlants] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/plantsdata');
        console.log('React Received Data:', response.data);
        setPlants(response.data);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white'>
      <h1>Plant Data</h1>
      <table>
        <thead>
          <tr>
            <th>Plant ID</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.plant_id}>
              <td>{plant.plant_id}</td>
              <td>{plant.plant_name}</td>
              <td>{plant.capacity}</td>
              <td>{plant.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlantsData;