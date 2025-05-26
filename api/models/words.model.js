const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
  word: {
    type: String,
    required: [true, "please provide it"],
  },
  definition: {
    type: String,
    required: [true, "please provide it"],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
});

const words = mongoose.model("Words", wordSchema);

module.exports = words;
