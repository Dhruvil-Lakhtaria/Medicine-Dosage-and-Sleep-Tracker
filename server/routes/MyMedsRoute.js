const express = require("express");
const { default: mongoose } = require("mongoose");
const MyMeds= require('../models/MyMedsModel');
const router = express.Router();

router.post("/", async (req, res) => {
      try {
        const medicine_name = req.query.medicine_name;
        const quantity= req.query.quantity;
        const timings = [true,false,false]
        const _id = new mongoose.Types.ObjectId();
        const mymeds  = await MyMeds.create({
          _id,
          medicine_name,
          quantity,
          timings,
        })
        await mymeds.save();
        return res.status(201).json(mymeds);
      } catch (err) {
        res.status(404).json({ error: `${err}` });
      }
    });

module.exports=router;