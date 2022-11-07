const express = require("express");
const userRouter = express.Router();
const User = require("../models/userSchema");
userRouter.get("/todos", async (req, res) => {
  const { email } = req.query;
  let todo = await User.find({ email });
  res.send(todo);
});
userRouter.post("/addtodo", async (req, res) => {
  const { email, task, status, tag } = req.body;
  const adduser = new User({
    email,
    task,
    status,
    tag,
  });
  await adduser.save();
  res.send(adduser);
});

userRouter.delete("/delet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletuser = await User.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).send(deletuser);
  } catch (error) {
    res.status(422).send(error);
  }
});
module.exports = userRouter;
