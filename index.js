const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const user = require("./models/user");

const app = express();

//connect to mongoDB
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Jaxongir:mern-register@cluster0.zqk0jwy.mongodb.net/register",
      () => {
        console.log("connected to DB");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
connectDB();
// use JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//METHOD POST
app.post("/signup", (req, res) => {
  console.log(req.body);
  // const { name, email, password } = req.body;
  // if ((!name || !email, !password)) {
  //   res.status(400).json({ msg: "Iltimos barcha inputlarni to'ldiring" });
  // }

  // res.status(200).json({ message: "signup mofaqiyatli amalga ishirildi!" });
});

//LISTEN SERVER
app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});

//MONGODB PASSWORD =  mern-register
