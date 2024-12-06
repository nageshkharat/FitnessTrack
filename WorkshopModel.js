const mongoose = require("mongoose");

const WorkshopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  workshopTitle: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WorkshopRegistration", WorkshopSchema);
