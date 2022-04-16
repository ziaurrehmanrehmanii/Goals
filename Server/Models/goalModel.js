const mongoose = require("mongoose");
// Goals Databse Schema

const goalsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: "string",
      required: [true, "Plase Add a text Value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalsSchema);
