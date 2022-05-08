const mongoose=require('mongoose');

const MyMeds=new mongoose.Schema({
    _id: Number,
    medicine_name: String,
    quantity: Number,
    time: String,
})

module.exports=mongoose.model('MyMeds',MyMeds)