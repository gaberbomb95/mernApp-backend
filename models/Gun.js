
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const gunSchema = new Schema(
  {
    brand: String,
    model: String,
    img: String,
  },
  { timestamps: true }
);

const Gun = model("Gun",gunSchema);

module.exports = Gun;

