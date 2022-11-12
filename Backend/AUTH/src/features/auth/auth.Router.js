const express = require("express");
const app = express.Router();
const authModel = require("./auth.model");

app.get("/", async (req, res) => {
  try {
    let data = await authModel.find({}, { password: 0, email: 0 });
    console.log(data);
    res.send(data);
  } catch (er) {
    res.send(er.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await authModel.findOne({ email });
    console.log(user);
    if (user) {
      if (password == user.password) {
        res.status(200).send({ token: `${user.name}-${email}-${user._id}` });
      } else {
        res.status(400).send(`wrong Password for the ${email}`);
      }
    } else {
      res.status(400).send(`User with email-->${email} doesn't exist`);
    }
  } catch (er) {
    console.log(er.message);
    res.status(400).send(er.message);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, age, gender, name } = req.body;
  if (!email || !password || !name || !gender) {
    return res.status(400).send("Empty Field");
  }
  console.log(req.body,"inside quth signup")
  try {
    let User = await authModel.find({ email });
    if (User.length !== 0) {
      console.log(User);
      return res.status(400).send("Cannot create User with existing user");
    } else {
      let userCreate = await authModel.create({
        ...req.body,
      });
      return res.status(200).send(userCreate);
    }
  } catch (er) {
    res.status(400).send("Require Credentials missing");
  }
});
module.exports = app;
