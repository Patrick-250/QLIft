import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RideMap = ({ rides }) => {
  return (
    <div className="ride-map">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {rides.map((ride) => (
          <Marker key={ride.id} position={[ride.latitude, ride.longitude]}>
            <Popup>
              <h3>{ride.destination}</h3>
              <p>Driver: {ride.driver}</p>
              <p>Time: {ride.time}</p>
              <p>Price: ${ride.price}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default RideMap;