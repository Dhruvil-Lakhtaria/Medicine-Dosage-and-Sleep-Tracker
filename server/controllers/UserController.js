const User = require("../models/UserModel");

exports.addUser = async (req,res,next) => {
    try{
        const {name,email,password} = req.body;
    }
    catch (err) {
        res.status(401).json({
            message: err.message,
            success: false
        })
    }
}