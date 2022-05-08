import React, { useState } from "react";
const Addform = ({ onAdd }) => {
  const [formState, changeState] = useState(false);
  const changeStatus = () => {
    changeState(!formState);
  };
  const [appointment_with, setAppointment_with] = useState("");
  const [appointment_title, setTitle] = useState("");
  const [appointment_address, setAddress] = useState("");
  const [appointment_date, setDate] = useState("");
  const [appointment_time,setTime] = useState("");

  const addAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      appointment_with: appointment_with,
      appointment_title: appointment_title,
      appoitment_date: appointment_date,
      appointment_address: appointment_address,
    };
    onAdd(appointment);
    setAppointment_with("");
    setAddress("");
    setDate("");
    setTitle("");
    setTime("");
  };
  return (
    <div className="addForm">
      {!formState ? (
        <button className="add-btn" onClick={changeStatus}>
          Add
        </button>
      ) : (
        <button className="close-btn" onClick={changeStatus}>
          Close
        </button>
      )}
      {formState && (
        <form
          className="appointment-form"
          id="appointment-form"
          onSubmit={addAppointment}
        >
          <div className="form-header">
            <h2>Appointment Details</h2>
          </div>
          <input
            type="text"
            placeholder="Appointment with"
            className="doctorname-input"
            value={appointment_with}
            onChange={(e) => setAppointment_with(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title/Reason"
            className="title-input"
            value={appointment_title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Address"
            className="address-input"
            value={appointment_address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
          <div className="date-time-wrapper">
            <h3 className="date-time-header">Date and Time</h3>
            <div className="time-date-input">
              <input
                type="date"
                className="date-input"
                value={appointment_date}
                onChange={(e) => setDate(e.target.value)}
                required
              ></input>
              <input
                type="time"
                className="time-input"
                value={appointment_time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="submit-btn">Save</button>
        </form>
      )}
    </div>
  );
};

export default Addform;
