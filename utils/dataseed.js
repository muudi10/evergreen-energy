const mongoose = require("mongoose");
const HouseSchema = require("../models/house.schema");
const mockData = require("../dummy_data/location_data");
const heatPumpSchema = require("../models/heatPump.shema");
const heatpumps = require('../dummy_data/pump')
require('dotenv').config()
const URI = process.env.MONGODB_URI
console.log(URI)
const coonecttoDb = mongoose

  .connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const databaseFill = async () => {
  await HouseSchema.insertMany(mockData);
};

databaseFill().then(() => {
  mongoose.connection.close();
});
module.exports = coonecttoDb;