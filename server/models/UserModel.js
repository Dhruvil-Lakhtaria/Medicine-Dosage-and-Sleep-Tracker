const mongoose = require("mongoose");

const User = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  email: String,
  password: String,
  appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  snooze: [{ type: mongoose.Schema.Types.ObjectId, ref: "Snooze" }],
  mymeds: [{ type: mongoose.Schema.Types.ObjectId, ref: "MyMeds" }],
});

module.exports = mongoose.model("User", User);
