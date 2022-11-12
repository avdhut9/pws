require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const authRouter = require("./features/auth/auth.Router");
const todoRouter=require("./features/Todo/todo.router")




app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/todo", todoRouter);






app.get("/", async (req, res) => {
  try {
    res.send("HOME PAGE BASIC ROUTE");
  } catch (er) {
    res.send(er.message);
  }
});
app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`listening on http://localhost:${PORT}`);
  } catch (er) {
    console.log(er.message);
  }
});
