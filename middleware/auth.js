const express = require("express");
var jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    var decoded = jwt.verify(token, "abc");
    const { email } = decoded;
    // const Data = await User.find({ email });
    next();
  } catch (err) {
    console.log("Auth Error");
    console.log(err);
  }
};

module.exports = { auth };
