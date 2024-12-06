const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exercises: [
    {
      date: String,
      activity: String,
      duration: Number,
    },
  ],
});

module.exports = mongoose.model("Fitness", fitnessSchema);
