const mongoose=require('mongoose');

const Appointment=new mongoose.Schema({
    _id:  mongoose.Schema.ObjectId,
    appointment_with: String,
    appointment_title: String,
    appointment_address: String,
    appointment_date: String
})

module.exports=mongoose.model('Appointment',Appointment)