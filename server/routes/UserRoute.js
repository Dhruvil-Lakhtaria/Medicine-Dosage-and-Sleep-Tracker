const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../models/UserModel");
const router = express.Router();
const MyMeds= require('../models/MyMedsModel')
const Appointment=require('../models/AppointmentModel');
const Snooze = require("../models/SnoozeModel");
router.post("/register", async (req, res) => {
  try {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;
    const _id = new mongoose.Types.ObjectId();
    const user  = await User.create({
      _id,
      name,
      email,
      password,
    })
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});

router.post("/mymeds", async (req, res) => {
  try {
    const medicine_name = req.query.medicine_name;
    const quantity= Number(req.query.quantity);
    const timings = [true,false,false]
    const _id = new mongoose.Types.ObjectId();
    const mymeds  = await MyMeds.create({
      _id,
      medicine_name,
      quantity,
      timings,
    })
    await mymeds.save();
    return res.status(201).json(mymeds);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});

router.post("/appointments", async (req, res) => {
  try {
    const appointment_with = req.query.appointment_with;
    const appointment_date= req.query.appointment_date;
    const appointment_title=req.query.appointment_title;
    const appointment_address=req.query.appointment_address;
    const _id = new mongoose.Types.ObjectId();
    const appointments  = await Appointment.create({
      _id,
      appointment_with,
      appointment_date,
      appointment_title,
      appointment_address
    })
    await appointments.save();
    return res.status(201).json(appointments);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});

router.post("/snooze",async(req,res)=>{
  try{
    const sleeptime=req.query.sleeptime
    const _id=new mongoose.Types.ObjectId();
    const snooze=await Snooze.create({
      _id,
      sleeptime
    })
    await snooze.save();
    return res.status(201).json(snooze);
  } catch(err){
    res.status(404).json({ error: `${err}`});
  }
})


router.post("")

module.exports = router;
