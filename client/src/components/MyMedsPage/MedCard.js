import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCloudSun, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const MedCard = ({ Name, Qty, Morning, Afternoon, Night,deleteMed }) => {
  return (
    <div className="Med">
      <div className="topMed">
        <h2>
          {Name} - x{Qty}
        </h2>
        <FontAwesomeIcon className="delete-icon" icon={faSquareXmark} onClick={() => deleteMed(Name)}/>
      </div>
      <div className="Dosage">
        <h4>Dosage : </h4>
        {Morning ? (
          <div className="dose-time morning">
            <FontAwesomeIcon icon={faSun} color="#ffa500" />
            <p>Morning</p>
          </div>
        ) : (
          ""
        )}
        {Afternoon ? (
          <div className="dose-time morning">
            <FontAwesomeIcon icon={faCloudSun} color="white" />
            <p>Afternoon</p>
          </div>
        ) : (
          ""
        )}
        {Night ? (
          <div className="dose-time morning">
            <FontAwesomeIcon icon={faMoon} color="Gray" />
            <p>Night</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MedCard;
