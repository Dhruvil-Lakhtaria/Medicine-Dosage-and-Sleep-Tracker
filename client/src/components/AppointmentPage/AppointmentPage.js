import React from "react";
import { useState } from "react";
import Appointments from "./Appointments";
import AppointmentHeader from "./AppointmentHeader";
import Navbar from "../Homepage/Navbar";
import Addform from "./Addform";
import "../../css/Homepage.css";
const AppointmentPage = () => {
  const [id, incrementid] = useState(0);

  const [appointments, setAppointments] = useState([]);
  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };
  const addAppointment = (appointment) => {
    var newAppointment = {id, ...appointment };
    newAppointment = {key:id,...newAppointment};
    incrementid(id+1);
    console.log(newAppointment);
    setAppointments([...appointments,newAppointment]);
  };
  return (
    <div className="AppointmentPage">
      <Navbar />
      <AppointmentHeader />
      <div className="appointmentpage-mainsection">
        <h1 className="appointments-header">APPOINTMENTS</h1>
        <Addform onAdd={addAppointment} />
        {appointments.length ? (
          <Appointments
            appointments={appointments}
            onDelete={deleteAppointment}
          />
        ) : (
          <h1 className="no-appointments">No Appointments Pending</h1>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
