const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { getPumpCost } =  require("../routes/pumpCost.js");
const { getHeatPump } = require("../routes/heatPumps.js");

app.use("/pump/cost", getPumpCost);
app.use("/pump", getHeatPump);
module.exports = app
module.exports.handler = serverless(app);
