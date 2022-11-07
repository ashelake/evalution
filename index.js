require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const User = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const { connection } = require("./db/conn");
const userRouter = require("./routes/router");
const { authRoute } = require("./routes/authRoutes");

const port = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server start");
});

app.use("/", userRouter);
app.use("/", authRoute);
app.listen(port, async () => {
  try {
    await connection;
    console.log(`to port${port}`);
  } catch (err) {
    console.log("Error in Connectiong DB");
    console.log(err);
  }
});
