const mongoose=require('mongoose');

const MyMeds=new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    medicine_name: String,
    quantity: Number,
    timings: [{type:Boolean}],
})

module.exports=mongoose.model('MyMeds',MyMeds)