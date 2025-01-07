import React from 'react';

const RideCard = ({ ride, onSelect }) => {
  return (
    <div className="ride-card" onClick={() => onSelect(ride)}>
      <h3>{ride.destination}</h3>
      <p>Driver: {ride.driver}</p>
      <p>Time: {ride.time}</p>
      <p>Price: ${ride.price}</p>
      <p>Seats Available: {ride.seatsAvailable}</p>
    </div>
  );
};

export default RideCard;