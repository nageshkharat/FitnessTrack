const express = require("express");
const Fitness = require("../models/Fitness");

const router = express.Router();

// Get User Fitness Data
router.get("/:userId", async (req, res) => {
  try {
    const fitnessData = await Fitness.findOne({ userId: req.params.userId });
    res.json(fitnessData || { message: "No fitness data found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Fitness Data (Admin)
router.post("/", async (req, res) => {
  const { userId, exercises } = req.body;
  try {
    let fitnessData = await Fitness.findOne({ userId });
    if (!fitnessData) {
      fitnessData = new Fitness({ userId, exercises });
    } else {
      fitnessData.exercises.push(...exercises);
    }
    await fitnessData.save();
    res.status(200).json({ message: "Fitness data updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
