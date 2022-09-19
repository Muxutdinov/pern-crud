const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middlewere
app.use(cors());
app.use(express.json());

//use Router
app.use("/api", require("./routes"));

app.listen(4000, () => console.log(`Server run on port ${PORT}`));
