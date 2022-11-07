const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Userdata } = require("../models/user.model");
const authRoute = express.Router();

authRoute.post("/signup", async (req, res) => {
  const { name, username, email, password, mobile, country, gender } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    const new_user = new Userdata({
      email,
      password: hash,
    });
    await new_user.save();
    res.send("Signup Page");
  });
});

authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Userdata.findOne({ email: email });
  console.log(user);
  if (user) {
    const hashpass = user.password;
    bcrypt.compare(password, hashpass, function (err, result) {
      if (result) {
        const token = jwt.sign({ email: email }, "abc");
        res.send({ msg: "Login Successfully", token: token });
      } else {
        res.send("Error In Login");
      }
    });
  } else {
    res.send({ msg: "Please Signup first" });
  }
});

module.exports = { authRoute };
