import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="social-section">
        <p>Get connected with us on social network</p>
        <div className="icons">
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="tw icon" />
          </a>
          <a
            href="https://www.instagram.com/rohit_taparia19/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="ig icon" />
          </a>
          <a
            href="https://github.com/Dhruvil-Lakhtaria/Medicine-Dosage-and-Sleep-Tracker"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="gh icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="fb icon" />
          </a>
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
            <li>
              <a href="/">Top</a>
            </li>
            <li>
              <a href="/appointments">Appointments</a>
            </li>
            <li>
              <a href="/mymeds">MyMeds</a>
            </li>
            <li>
              <a href="/snooze">Snooze</a>
            </li>
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
    </div>
  );
};

export default Footer;
