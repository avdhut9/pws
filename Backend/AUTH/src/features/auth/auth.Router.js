const express = require("express");
const app = express.Router();
const authModel = require("./Auth.model");

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
        res.send({ token: `${user.name}-${email}-${user._id}` });
      } else {
        res.send(`wrong Password for the ${email}`);
      }
    } else {
      res.send(`User with email-->${email} doesn't exist`);
    }
  } catch (er) {
    console.log(er.message);
    res.send(er.message);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    let User = await authModel.find({ email });
    if (User.length !== 0) {
      console.log(User);
      return res.send("Cannot create User with existing user");
    } else {
      let userCreate = await authModel.create({
        ...req.body,
      });
      return res.send(userCreate);
    }
  } catch (er) {
    res.send("Require Credentials missing");
  }
});
module.exports = app;
