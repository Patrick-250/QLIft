import React from 'react';
import './RideDetails.css';

const RideDetails = ({ ride }) => {
  return (
    <div className="ride-details">
      <h2>Ride Details</h2>
      <p>Pickup Location: {ride.pickupLocation}</p>
      <p>Dropoff Location: {ride.dropoffLocation}</p>
      <p>Ride Type: {ride.rideType}</p>
      <p>Driver: {ride.driverName}</p>
    </div>
  );
};

export default RideDetails;