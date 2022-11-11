const mongoose = require("mongoose");
const file = {
  email: { type: String, require: true },
  groupNumber: { type: Number, require: true },
  todo: [{ status: { type: Boolean }, title: { type: String } }],
};
const todoSchema = new mongoose.Schema(file);
const todoModel = mongoose.model("try", todoSchema);
module.exports = todoModel;
