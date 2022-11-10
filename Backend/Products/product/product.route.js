const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let users = await Product.find();
  res.send(users);
});

app.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let user = await Product.findById(id);
    if (!user) {
      res.send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let user = await Product.create(req.body);
    res.send(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// http://localhost:8080/users


app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let user = await Product.findByIdAndDelete(id);
  if (user) {
    res.send("User delete successfully");
  } else {
    res.send("User not found by these id");
  }
});

app.patch("/:id", async (req, res) => {
    let id = req.params.id;
  try {
    let user = await Product.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;
