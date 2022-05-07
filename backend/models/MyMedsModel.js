const mongoose=require('mongoose');

const MyMeds=new mongoose.Schema({
    _Id: Number,
    Medicine_Name: String,
    Quantity: Number,
    Time: String,
})

module.exports=mongoose.model('MyMeds',MyMeds)