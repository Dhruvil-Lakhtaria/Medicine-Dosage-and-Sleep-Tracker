const mongoose=require('mongoose');

const Snooze=new mongoose.Schema({
    _Id: Number,
    SleepTime: [{
        type: String
    }]
})

module.exports=mongoose.model('Snooze',Snooze)