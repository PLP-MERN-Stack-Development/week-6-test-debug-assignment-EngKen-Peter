const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["open", "in-progress", "resolved"],
    default: "open",
  },
});

const Bug = mongoose.model("Bug", bugSchema);
module.exports = Bug;
