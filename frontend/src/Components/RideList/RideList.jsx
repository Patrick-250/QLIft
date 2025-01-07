import React from 'react';
import './RideList.css';

const RideList = ({ rides, onSelectRide }) => {
  return (
    <div className="ride-list">
      <h2>Ride History</h2>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id} onClick={() => onSelectRide(ride)}>
            {ride.pickupLocation} to {ride.dropoffLocation} ({ride.rideType})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideList;