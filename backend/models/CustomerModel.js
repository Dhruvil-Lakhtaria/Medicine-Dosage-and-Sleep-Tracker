const mongoose=require('mongoose');

const Customer=new mongoose.Schema({
    _id: Number,
    Name: String,
    Email: String,
    Password: String,
    Appointment:[
        {type: Schema.Types.ObjectId, ref: 'Appointment'}
      ],  
    Snooze:{type: Schema.Types.ObjectId, ref: 'Snooze'},
    MyMeds:[
        {type: Schema.Types.ObjectId, ref: 'MyMeds'}
      ]
})

module.exports=mongoose.model('Customer',Customer)