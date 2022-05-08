const Appointment = require("../models/AppointmentModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const appointment_with = req.query.appointment_with;
    const appointment_date = req.query.appointment_date;
    const appointment_title = req.query.appointment_title;
    const appointment_address = req.query.appointment_address;
    const _id = new mongoose.Types.ObjectId();
    const appointments = await Appointment.create({
      _id,
      appointment_with,
      appointment_date,
      appointment_title,
      appointment_address,
    });
    await appointments.save();
    return res.status(201).json(appointments);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});

module.exports = router;