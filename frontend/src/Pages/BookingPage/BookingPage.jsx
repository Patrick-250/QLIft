import React from 'react';
import BookingForm from '../../Components/BookingForm/BookingForm';

const BookingPage = () => {
  const ride = { id: 1, destination: 'City A', driver: 'Driver 1', time: '10:00 AM', price: 20, seatsAvailable: 3 };

  const handleBooking = (formData) => {
    console.log('Booking data:', formData);
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm ride={ride} onSubmit={handleBooking} />
    </div>
  );
};

export default BookingPage;