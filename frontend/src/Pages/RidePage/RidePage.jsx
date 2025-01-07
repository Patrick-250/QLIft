import React, { useState } from 'react';
import RideDetails from '../../Components/RideDetails/RideDetails';
import RideCard from '../../Components/RideCard/RideCard';

const RidePage = () => {
  const rides = [
    { id: 1, destination: 'City A', driver: 'Driver 1', time: '10:00 AM', price: 20, seatsAvailable: 3, latitude: 51.505, longitude: -0.09 },
    { id: 2, destination: 'City B', driver: 'Driver 2', time: '11:00 AM', price: 25, seatsAvailable: 2, latitude: 51.515, longitude: -0.1 },
  ];

  const [selectedRide, setSelectedRide] = useState(null);

  return (
    <div>
      <h1>Ride Page</h1>
      <div className="ride-list">
        {rides.map((ride) => (
          <RideCard key={ride.id} ride={ride} onSelect={setSelectedRide} />
        ))}
      </div>
      {selectedRide && <RideDetails ride={selectedRide} />}
    </div>
  );
};

export default RidePage;