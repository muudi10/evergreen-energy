const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());

const { calcutateHeatLoose } = require("../routes/heatloss");

app.use("/heatloss", calcutateHeatLoose);

module.exports.handler = serverless(app);
