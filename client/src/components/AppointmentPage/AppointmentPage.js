import React from "react";
import { useState } from "react";
import Appointments from "./Appointments";
import AppointmentHeader from "./AppointmentHeader";
import Navbar from "../Homepage/Navbar"
import "../../css/Homepage.css";
const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 0,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar 534 E 1st St",
    },
    {
      id: 1,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar 534 E 1st St",
    },
  ]);
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id))
  };
  return (
    <div className="AppointmentPage">
      <Navbar />
      <AppointmentHeader />
      <h1 className="app-header">APPOINTMENTS</h1>
      <Appointments appointments={appointments} onDelete={deleteAppointment} />
    </div>
  );
};

export default AppointmentPage;
