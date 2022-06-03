const express = require("express");
const mongoose = require("mongoose");

//connect to mongoDB
mongoose.connect(
  "mongodb+srv://Jaxongir:mern-register@cluster0.zqk0jwy.mongodb.net/register",
  () => {
    console.log("Connected to MONGODB");
  }
);

const app = express();

app.get("/api", (req, res) => {
  res.json({ msg: "Hello from Backend development" });
});

app.listen(5000, () => {
  console.log("server run on port 5000");
});
// mern-register
