import React, { useEffect } from "react";
import { useState } from "react";
import Appointments from "./Appointments";
import AppointmentHeader from "./AppointmentHeader";
import Addform from "./Addform";
import Copyrights from "../Homepage/Copyrights";
import axios from "axios";
const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);

  const deleteAppointment = (key) => {
    console.log(key);
    setAppointments(
      appointments.filter((appointment) => appointment._id !== key)
    );
  };
  const addAppointment = (appointment) => {
    let queryString = "http://localhost:8000/appointment";
    queryString = queryString
      .concat("?userid=")
      .concat("62789de529ed129021782259")
      .concat("&appointment_with=")
      .concat(appointment.appointment_with)
      .concat("&appointment_title=")
      .concat(appointment.appointment_title)
      .concat("&appointment_address=")
      .concat(appointment.appointment_address)
      .concat("&appointment_date=")
      .concat(appointment.appointment_date)
      .concat("@")
      .concat(appointment.appointment_time);
    axios.post(queryString).then( (res) => {
      setAppointments([...appointments, appointment]);
    } );
  };
  useEffect( () => {
    let queryString = "http://localhost:8000/appointment?";
    queryString = queryString.concat("userid=").concat("62789de529ed129021782259");
    axios.get(queryString).then((res) => {
      console.log(res.data);
      setAppointments(res.data);
    });
  },[])
  
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
