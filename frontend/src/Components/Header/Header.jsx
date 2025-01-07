import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>QLIft</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/history">Ride History</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;