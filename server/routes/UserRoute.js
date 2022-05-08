const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../models/UserModel");
const router = express.Router();
const MyMeds= require('../models/MyMedsModel')

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



router.post("")

module.exports = router;
