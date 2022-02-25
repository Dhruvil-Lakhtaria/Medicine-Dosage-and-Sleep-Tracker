import React, { useState } from "react";
import "../../css/Appointment.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Appcard = ({ id, doctorName, title, date, time, address, onDelete }) => {
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
        <h3 className="doctorName">{doctorName}</h3>
        <h4 className="title">{title}</h4>
        <div className="adress">
          <FontAwesomeIcon icon={faLocationDot} className="appcard-icon" />
          <p className="appcard-text">{address}</p>
        </div>
        <div className="day-date">
          <FontAwesomeIcon icon={faCalendarCheck} className="appcard-icon" />
          <p className="appcard-text">{date} @ {time}</p>
        </div>
      </div>
      <div className="appcard-lower">
        <button className="pending" onClick={() => Clicked(id)} style={styleColor} >
          {statusText[status]}
        </button>
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Appcard;
