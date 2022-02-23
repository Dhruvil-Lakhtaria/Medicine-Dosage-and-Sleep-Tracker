import React from "react";
import logo from "../../img/sleep.jpg";
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
          <h1>Snooze</h1>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav">
          <li className="nav-item nav-h">
            <a href="/home">Home</a>
          </li>
          <li className="nav-item nav-s">
            <a href="/snooze">Stats</a>
          </li>
          <li className="nav-item nav-t">
            <a href="/register">Tip of the day</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
