import React, { useState } from "react";
import "../../css/Appointment.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Appcard = ({ key, appointment_with,appointment_title,appointment_date,appointment_address, onDelete }) => {
  const [status, changeStatus] = useState(0);
  const statusText = ["Pending", "Completed"];

  const Clicked = () => {
    changeStatus(status === 1 ? 0 : 1);
  };
  const colorOptions = ["#aa8706", "#34ca84"];
  const styleColor = {
    background: colorOptions[status],
  };
  return (
    <div className="app-card">
      <div className="appcard-upper">
        <h2 className="appcard-heading">Your Appointment</h2>
      </div>
      <div className="appcard-middle">
        <h3 className="doctorName">{appointment_with}</h3>
        <h4 className="title">{appointment_title}</h4>
        <div className="adress">
          <FontAwesomeIcon icon={faLocationDot} className="appcard-icon" />
          <p className="appcard-text">{appointment_address}</p>
        </div>
        <div className="day-date">
          <FontAwesomeIcon icon={faCalendarCheck} className="appcard-icon" />
          <p className="appcard-text">
            {appointment_date}
          </p>
        </div>
      </div>
      <div className="appcard-lower">
        <button
          className="pending"
          onClick={() => Clicked(key)}
          style={styleColor}
        >
          {statusText[status]}
        </button>
        <button className="delete" onClick={() => onDelete(key)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Appcard;
