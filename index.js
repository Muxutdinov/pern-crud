const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");

const app = express();

//connect to mongoDB
mongoose.connect(
  "mongodb+srv://Jaxongir:mern-register@cluster0.zqk0jwy.mongodb.net/register"
);

// use JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//METHOD POST
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if ((!name || !email, !password)) {
    res.status(400).json({ msg: "Iltimos barcha inputlarni to'ldiring" });
  }

  res.status(200).json({ message: "signup mofaqiyatli amalga ishirildi!" });
});

//LISTEN SERVER
app.listen(5000, () => {
  console.log("server run on port 5000");
});

//MONGODB PASSWORD =  mern-register
