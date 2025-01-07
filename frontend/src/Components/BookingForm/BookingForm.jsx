import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onNewRide }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [rideType, setRideType] = useState('standard');
  const [scheduleDate, setScheduleDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRide = {
      id: Date.now(),
      pickupLocation,
      dropoffLocation,
      rideType,
      scheduleDate,
      driverName: 'DR 1' // Example driver name
    };
    onNewRide(newRide);
    setPickupLocation('');
    setDropoffLocation('');
    setRideType('standard');
    setScheduleDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pickup Location:</label>
        <input 
          type="text" 
          value={pickupLocation} 
          onChange={(e) => setPickupLocation(e.target.value)} 
        />
      </div>
      <div>
        <label>Dropoff Location:</label>
        <input 
          type="text" 
          value={dropoffLocation} 
          onChange={(e) => setDropoffLocation(e.target.value)} 
        />
      </div>
      <div>
        <label>Ride Type:</label>
        <select 
          value={rideType} 
          onChange={(e) => setRideType(e.target.value)}
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div>
        <label>Schedule Date:</label>
        <input 
          type="datetime-local" 
          value={scheduleDate} 
          onChange={(e) => setScheduleDate(e.target.value)} 
        />
      </div>
      <button type="submit">Book Ride</button>
    </form>
  );
};

export default BookingForm;