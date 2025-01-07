import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import RideList from '../../Components/RideList/RideList';

const HomePage = () => {
  const rides = [
    { id: 1, destination: 'City A', driver: 'Driver 1', time: '10:00 AM', price: 20, seatsAvailable: 3 },
    { id: 2, destination: 'City B', driver: 'Driver 2', time: '11:00 AM', price: 25, seatsAvailable: 2 },
  ];

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <SearchBar onSearch={handleSearch} />
      <RideList rides={rides} />
    </div>
  );
};

export default HomePage;