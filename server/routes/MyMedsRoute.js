const express = require("express");
const { default: mongoose } = require("mongoose");
const MyMeds= require('../models/MyMedsModel');
const router = express.Router();
const User=require('../models/UserModel')
router.post("/", async (req, res) => {
      try {
        let userid = req.query.userid;
        const user = await User.findById({_id:userid});
        const medicine_name = req.query.medicine_name;
        const quantity= req.query.quantity;
        const m = req.query.morning;
        const a = req.query.afternoon;
        const n = req.query.night;
        const timings = [m,a,n];
        const _id = new mongoose.Types.ObjectId();
        const mymeds  = await MyMeds.create({
          _id,
          medicine_name,
          quantity,
          timings,
        });
        await mymeds.save();
        user.mymeds.push(mymeds._id);
        await user.save();
        console.log(mymeds);
        return res.status(201).json(mymeds);
      } catch (err) {
        res.status(404).json({ error: `${err}` });
      }
    });

    router.get("/", async (req, res) => {
        try {
          const userid = req.query.userid;
          const user = await User.findById({_id:userid});
          const mymeds = user.mymeds;
          const data = [];
          for(med of mymeds)
          {
              const mymeds_data = await MyMeds.findById({_id:med});
              data.push(mymeds_data);
          } 
          res.status(200).send(data);
        } catch (err) {
          res.status(404).json({ error: `${err}` });
        }
      });
module.exports=router;