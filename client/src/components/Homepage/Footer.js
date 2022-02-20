import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone,faHeart } from "@fortawesome/free-solid-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons"
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="social-section">
        <p>Get connected with us on social network</p>
        <div className="icons">
          <FontAwesomeIcon icon={faTwitter} className="tw icon" />
          <FontAwesomeIcon icon={faInstagram} className="ig icon" />
          <FontAwesomeIcon icon={faGithub} className="gh icon" />
          <FontAwesomeIcon icon={faFacebook} className="fb icon" />
        </div>
      </div>
      <div className="main-section">
        <div className="footer-info">
          <h3>MEDISAFE</h3>
          <p>
            We are highly motivated towards your service. It's more than just
            drugs. Together we achieve more.
          </p>
        </div>
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul className="link-list">
            <li>Home</li>
            <li>Appointments</li>
            <li>MyMeds</li>
            <li>Snooze</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>CONTACT US</h3>
          <ul className="contacts">
            <li className="contact">
              <FontAwesomeIcon icon={faHome} className="add" />
              NITK,Surathkal 575025,India{" "}
            </li>
            <li className="contact">
              <FontAwesomeIcon icon={faEnvelope} className="email" />
              medisafe@gmail.com
            </li>
            <li className="contact">
              <FontAwesomeIcon icon={faPhone} className="phone" />
              +91 0123456789
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
        <p><FontAwesomeIcon icon={faCopyright}/>2022 copyright: medisafe.com</p>
        <p >Made with <FontAwesomeIcon className="heart" icon={faHeart}/> by MediSafe</p>
      </div>
    </div>
  );
};

export default Footer;
