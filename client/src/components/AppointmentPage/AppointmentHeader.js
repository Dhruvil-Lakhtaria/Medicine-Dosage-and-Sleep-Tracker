import React from "react";
import Typewriter from "typewriter-effect";
const AppointmentHeader = () => {
  const textArray = [
    "Its More Than Just a Nail Appointment.",
    "Following your schedule.",
    "The perfect smile is an appointment away.",
  ];
  const headerHeight = { height: window.innerHeight };
  return (
    <div className="appointment-header" style={headerHeight}>
      <h1 className="appointment-heading">RENDEZVOUS</h1>
      <Typewriter
        options={{
          strings: textArray,
          autoStart: true,
          loop: true,
          cursor: "|",
        }}
        className="typing"
      />
    </div>
  );
};

export default AppointmentHeader;
