import React from 'react';
import UserProfile from '../../Components/UserProfile/UserProfile';

const ProfilePage = () => {
  const user = { username: 'JohnDoe', contact: 'john.doe@example.com' };
  const rideHistory = [
    { id: 1, destination: 'City A', driver: 'Driver 1', time: '10:00 AM', price: 20 },
    { id: 2, destination: 'City B', driver: 'Driver 2', time: '11:00 AM', price: 25 },
  ];

  return (
    <div>
      <h1>Profile Page</h1>
      <UserProfile user={user} rideHistory={rideHistory} />
    </div>
  );
};

export default ProfilePage;