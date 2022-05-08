const mongoose=require('mongoose');

const Snooze=new mongoose.Schema({
    _id:  mongoose.Schema.ObjectId,
    sleeptime: [{
        type: String
    }]
})

module.exports=mongoose.model('Snooze',Snooze)