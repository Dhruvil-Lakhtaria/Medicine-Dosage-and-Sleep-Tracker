const connectDB = require("./config/db");
const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoute");
const app = express();
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/auth",UserRouter);

app.listen(8000, () => {
  console.log("Server Listening on 8000");
});
