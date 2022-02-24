import React from "react";
import { useState } from "react";
import Appointments from "./Appointments";
import AppointmentHeader from "./AppointmentHeader";
import Navbar from "../Homepage/Navbar";
import "../../css/Homepage.css";
const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 0,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Opp Crystal Mall, Khodiyar Colony",
    },
    {
      id: 1,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar, Surathkal",
    },
    {
      id: 2,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar, Surathkal",
    },
    {
      id: 3,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar, Surathkal",
    },
    {
      id: 4,
      doctorName: "Dr. S.K. Patel",
      title: "Skin Problem",
      date: "August 2 Tuesday",
      time: "12:30PM",
      address: "Proto BuildBar, Surathkal",
    },
  ]);
  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };
  return (
    <div className="AppointmentPage">
      <Navbar />
      <AppointmentHeader />
      <div className="appointmentpage-mainsection">
        <h1 className="appointments-header">APPOINTMENTS</h1>
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
