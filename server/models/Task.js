const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: String,
    body: String,
    imageUrl: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Task", taskSchema);
