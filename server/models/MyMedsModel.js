const mongoose=require('mongoose');

const MyMeds=new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    medicine_name: String,
    quantity: Number,
    timings: [],
})

module.exports=mongoose.model('MyMeds',MyMeds)