const mongoose=require('mongoose');

const Appointment=new mongoose.Schema({
    _id: Number,
    Appointment_With: String,
    Appointment_Title: String,
    Appointment_Address: String,
    Appointment_Date: String
})

module.exports=mongoose.model('Appointment',Appointment)