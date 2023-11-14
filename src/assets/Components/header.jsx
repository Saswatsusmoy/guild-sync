import React, { useState } from 'react';
import './header.css'

// CircularNavbar Component
const CircularNavbar = () => {
  // State to handle the "active" class and visibility toggling
  const [isActive, setIsActive] = useState(false);

  // Event handler for when the burger icon is clicked
  const handleBarClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div 
        className={`bars ${isActive ? 'active' : ''}`}
        id="nav-action"
        onClick={handleBarClick}
      >
        <span className="bar"></span>
      </div>

      {/* Navbar Links */}
      <nav id="nav" className={` ${isActive ? 'visible' : ''}`}>
        <ul>
          <li className="shape-circle circle-one">
            <a href="#">Contact</a>
          </li>
          <li className="shape-circle circle-two">
            <a href="#">Login/SignUp</a>
          </li>
          <li className="shape-circle circle-three">
            <a href="#">Availability</a>
          </li>
          <li className="shape-circle circle-four">
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>

      {/* Main Body Content */}
      <article className="container">
        <h1>
          GuildSync
        </h1>
        <p>"Crafting Connections, Building Values, Where Trades Thrive Economically."</p>
      </article>
    </>
  );
};

export default CircularNavbar;
