const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  weight: Number,
  height: Number,
  dob: String,
  number: String,
  city: String,
  gender: String,
  role: { type: String, default: "user" },
});

module.exports = mongoose.model("User", userSchema);
