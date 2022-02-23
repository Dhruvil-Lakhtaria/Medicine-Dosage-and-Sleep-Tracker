import React from "react";
import "../../css/Appointment.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Appcard = ({ id, doctorName, title, date, time, address, onDelete }) => {
  const cardColor = [
    { color1: "#2193bd", color2: "#135299" },
    { color1: "#f55b96", color2: "#c70c53" },
    { color1: "#f38563", color2: "#f34f1d" },
  ];
  const dynamicStyling = {
    background: `radial-gradient(${cardColor[id % 3].color1},${
      cardColor[id % 3].color2
    })`,
  };
  return (
    <div className="app-card" style={dynamicStyling}>
      <div className="close">
        <FontAwesomeIcon
          className="x-sym"
          icon={faCircleXmark}
          onClick={() => onDelete(id)}
        />
      </div>
      <div className="app-content">
        <h2 className="upper">Your Meetups</h2>
        <h3 className="meetup">{doctorName}</h3>
        <h4 className="group">{title}</h4>
        <div className="details">
          <p className="time-date">
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            <time>
              {date} at {time}
            </time>
          </p>
          <p className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appcard;
