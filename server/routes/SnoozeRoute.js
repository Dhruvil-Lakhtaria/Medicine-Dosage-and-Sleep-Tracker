const express = require("express");
const { default: mongoose } = require("mongoose");
const Snooze = require("../models/SnoozeModel");
const router = express.Router();

router.post("/",async(req,res)=>{
  try{
    const sleeptime=req.query.sleeptime
    const _id=new mongoose.Types.ObjectId();
    const snooze=await Snooze.create({
      _id,
      sleeptime
    })
    await snooze.save();
    return res.status(201).json(snooze);
  } catch(err){
    res.status(404).json({ error: `${err}`});
  }
})

module.exports=router;