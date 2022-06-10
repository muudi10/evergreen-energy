const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  location: String,
  degreeDays: Number,
  groundTemp: Number,
  postCode: String,
  latitude: Number,
  longtitude: Number,
});

module.exports = mongoose.models.house ||   mongoose.model("house", houseSchema);
