const express = require("express");
const authModel = require("../auth/auth.model");
const todoModel = require("./todo.model");
const app = express.Router();

const MiddleWare = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("Missing Token");
  }
  let [email, password] = token.split("_#_");
  try {
    let user = await authModel.findOne({ email });
    console.log(user);
    if (user) {
      if (password === user.password) {
        req.userId = user.id;
        next();
      } else {
        res.status(401).send("Authentication check failed password wrong");
      }
    } else {
      res.status(400).send(`user with token email:${email} not found`);
    }
  } catch (er) {
    res.send(`inside tries middleware ${er.message}`);
  }
};

//<<------initial load----->fetch.get(http://localhost/8080/cart/email)>>>

app.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    let data = await todoModel.find({ email }).sort({ groupNumber: "asc" });
    res.send(data);
  } catch (er) {
    res.status(401).send(`inside get Todo-->${er.message}`);
  }
});

//<<------Find single group by id----->>>>

app.get("/", async (req, res) => {
  const { groupId, email } = req.query;
  try {
    let data = await todoModel.findOne({ email, _id: groupId });
    return res.send(data);
  } catch (er) {
    return res.send(er.message);
  }
});

//<<------ group and todo creation----->>>>

app.post("/", async (req, res) => {
  const { email, groupNumber } = req.body;
  try {
    let data = await todoModel.findOne({ email, groupNumber });
    console.log(data, "inside post right now");
    if (data) {
      data.todo = [...data.todo, ...req.body.todo];
      let fix = await todoModel.findByIdAndUpdate(
        data._id,
        {
          ...data,
        },
        { new: true }
      );
      return res.send(fix);
    } else {
      let createBase = await todoModel.create({ ...req.body });
      return res.send(createBase);
    }
  } catch (er) {
    return res.status(401).send(`inside todo ${er.message}`);
  }
});

//<<------FULL group delete----->>>>

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let data = await todoModel.findByIdAndDelete(id);
    res.send(data);
  } catch (er) {
    res.status(401).send(`inside delete tries-->${er.message}`);
  }
});

//<<------todo from group delete----->>>>

app.delete("/", async (req, res) => {
  const { groupId, titleId } = req.query; // todo
  console.log(titleId);
  if (!groupId || !titleId) {
    return res.status(200).send("Missing quires");
  }
  try {
    let { todo } = await todoModel.findOne({ _id: groupId }, { todo: 1 });

    let filter = todo.filter((item) => {
      console.log(item._id.toString(), typeof titleId);
      return item._id.toString() !== titleId;
    });
    console.log(filter.length, "<-----------------------------");
    let fix = await todoModel.findByIdAndUpdate(
      { _id: groupId },
      { todo: [...filter] },
      { new: true }
    );

    res.send(fix);
  } catch (er) {
    res.status(401).send(`inside todo delete--->${er.message}`);
  }
});

app.patch("/", async (req, res) => {
  const { groupId, titleId } = req.query; // todo

  if (!groupId || !titleId) {
    return res.status(200).send("Missing quires");
  }
  try {
    let { todo } = await todoModel.findOne({ _id: groupId }, { todo: 1 });

    let filter = todo.map((item) => {
      if (item._id.toString() === titleId) {
        item.status = !item.status;
      }
      return item;
    });
    console.log(filter.length, "<-----------------------------");
    let fix = await todoModel.findByIdAndUpdate(
      { _id: groupId },
      { todo: [...filter] },
      { new: true }
    );

    res.send(fix);
  } catch (er) {
    res.status(401).send(`inside todo delete--->${er.message}`);
  }
});

module.exports = app;

