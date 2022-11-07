const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String },
  task: {
    type: String,
  },
  status: {
    type: String,
  },
  tag: { type: String },
});

const User = mongoose.model("evalution", userSchema);

module.exports = User;
