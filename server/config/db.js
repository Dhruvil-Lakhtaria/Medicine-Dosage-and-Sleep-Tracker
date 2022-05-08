const mongoose = require("mongoose");
const connectDB = async() => {
    await mongoose.connect("mongodb+srv://Dhruvil:Dhruvil@cluster0.mxotc.mongodb.net/Medisafe?retryWrites=true&w=majority",{useNewUrlParser:true});
    console.log("Mongo Connected");
}

module.exports = connectDB;
