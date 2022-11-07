const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Userdata = mongoose.model("evalutionuser", UserSchema);

module.exports = { Userdata };
