const Appointment = require("../models/AppointmentModel");
const User = require("../models/UserModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userid = req.query.userid;
    const user = await User.findById({ _id: userid });
    console.log(userid);
    const appointment_with = req.query.appointment_with;
    const appointment_date = req.query.appointment_date;
    const appointment_title = req.query.appointment_title;
    const appointment_address = req.query.appointment_address;
    const pending=false;
    const _id = new mongoose.Types.ObjectId();
    const appointments = await Appointment.create({
      _id,
      appointment_with,
      appointment_date,
      appointment_title,
      appointment_address,
      pending
    });
    await appointments.save();
    user.appointment.push(appointments._id);
    await user.save();
    return res.status(201).json(appointments);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});

router.get("/", async (req, res) => {
  try {
    const userid = req.query.userid;
    const user = await User.findById({_id:userid});
    const appointments = user.appointment;
    const data = [];
    for(appointment of appointments)
    {
        const appointment_data = await Appointment.findById({_id:appointment});
        data.push(appointment_data);
    } 
    res.status(200).send(data);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});
module.exports = router;
