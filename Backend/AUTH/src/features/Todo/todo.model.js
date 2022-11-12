const mongoose = require("mongoose");
const file = {
  email: { type: String, required: true },
  groupNumber: { type: Number, required: true },
  groupName: { type: String, required: true },
  todo: [
    {
      status: { type: Boolean },
      title: { type: String },
      priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        required: true,
      },
      startDate: { type: String },
      endDate: { type: String },
    },
  ],
};
const todoSchema = new mongoose.Schema(file);
const todoModel = mongoose.model("try", todoSchema);
module.exports = todoModel;
