import React from "react";
import logo from "../img/cardiogram.png";
import $ from "jquery";

const handleClick = () => {
  $(".nav").toggleClass("mobile-nav");
  $(".menu-toggle").toggleClass("is-active");
};
const Navbar = () => {
  
  return (
    <div className="navbar-wrapper">
      <div className="grad-bar"></div>
      <div className="navbar">
        <div className="header">
          <img alt="logo" src={logo} className="nav-logo"></img>
          <h1>MediSafe</h1>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a href="/appointments">Appointments</a>
          </li>
          <li className="nav-item">
            <a href="mymeds">MyMeds</a>
          </li>
          <li className="nav-item">
            <a href="/snooze">Snooze</a>
          </li>
          <li className="nav-item">
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;