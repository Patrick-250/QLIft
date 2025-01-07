import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import RideList from '../RideList/RideList';
import RideDetails from '../RideDetails/RideDetails';
import Profile from '../Profile/Profile';
import Payment from '../Payment/Payment';
import Support from '../Support/Support';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleNewRide = (newRide) => {
    setRides([...rides, newRide]);
    setShowBookingForm(false); // Hide form after booking
  };

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <button onClick={toggleBookingForm}>
            {showBookingForm ? 'Cancel' : 'Book a Ride'}
          </button>
          {showBookingForm && <BookingForm onNewRide={handleNewRide} />}
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/support" element={<Support />} />
            <Route path="/history" element={<RideList rides={rides} onSelectRide={setSelectedRide} />} />
            <Route path="/ride-details" element={selectedRide && <RideDetails ride={selectedRide} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;