import React, { useState } from "react";
const Addform = ({ onAdd }) => {
  const [formState, changeState] = useState(false);
  const changeStatus = () => {
    changeState(!formState);
  };
  const [dName, setDname] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const addAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      doctorName: dName,
      title: title,
      date: date,
      time: time,
      address: address,
    }
    onAdd(appointment);
    setDname("");
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
            placeholder="Doctor's Name"
            className="doctorname-input"
            value={dName}
            onChange={(e) => setDname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title/Reason"
            className="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Address"
            className="address-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
          <div className="date-time-wrapper">
            <h3 className="date-time-header">Date and Time</h3>
            <div className="time-date-input">
              <input
                type="date"
                className="date-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              ></input>
              <input
                type="time"
                className="time-input"
                value={time}
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
