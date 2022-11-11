const mongoose = require("mongoose");
const file = {
  name: { type: String,require:true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: String, min: 20, max: 100 },
  gender: { type: String, enum: ["Male", "Female"] },
};

const authSchema = new mongoose.Schema(file);
const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;
