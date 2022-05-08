import React, { useEffect } from "react";
import { useState } from "react";
import Appointments from "./Appointments";
import AppointmentHeader from "./AppointmentHeader";
import Addform from "./Addform";
import Copyrights from "../Homepage/Copyrights";
import axios from "axios";
const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);

  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
    console.log("Appointment Deleted");
  };
  const addAppointment = (appointment) => {
    axios.post("http://localhost:8000/appointment?userid=62779691a3873b6c38ebe929",appointment)
    setAppointments([...appointments, appointment]);
    console.log("Appointment Added");
  };
  useEffect( () => {
    axios.get("http://localhost:8000/appointment?userid=62779691a3873b6c38ebe929")
    .then( res => {
      console.log(res.data);
      setAppointments(res.data);
    });
  },[]);
  return (
    <div className="AppointmentPage">
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
      <Copyrights />
    </div>
  );
};

export default AppointmentPage;
