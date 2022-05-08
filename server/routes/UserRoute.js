const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../models/UserModel");
const router = express.Router();
const MyMeds = require("../models/MyMedsModel");
const Snooze = require("../models/SnoozeModel");
router.post("/register", async (req, res) => {
  try {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;
    const _id = new mongoose.Types.ObjectId();
    const user = await User.create({
      _id,
      name,
      email,
      password,
    });
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    res.status(404).json({ error: `${err}` });
  }
});
router.get("/login", async (req, res) => {
  try {
    const nm = req.query.name;
    const pwd = req.query.password;
    const user = User.find({ name: nm, password: pwd }); 
    const data = [];
    (await user).forEach((userData) => {
      data.push(userData._id);
    })
    res.status(200).send(data);
  } catch (err) {}
});

module.exports = router;
