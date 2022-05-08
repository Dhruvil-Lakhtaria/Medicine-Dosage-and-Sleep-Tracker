const mongoose=require('mongoose');

const Snooze=new mongoose.Schema({
    _id: Number,
    sleeptime: [{
        type: String
    }]
})

module.exports=mongoose.model('Snooze',Snooze)