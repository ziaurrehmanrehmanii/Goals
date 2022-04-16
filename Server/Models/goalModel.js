const mongoose = require("mongoose");
// Goals Databse Schema

const goalsSchema = mongoose.Schema(
  {
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
