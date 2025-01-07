import React from 'react';

const UserProfile = ({ user, rideHistory }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Contact:</strong> {user.contact}</p>
      </div>
      <div className="ride-history">
        <h3>Ride History</h3>
        <ul>
          {rideHistory.map((ride) => (
            <li key={ride.id}>
              <h4>{ride.destination}</h4>
              <p>Driver: {ride.driver}</p>
              <p>Time: {ride.time}</p>
              <p>Price: ${ride.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;