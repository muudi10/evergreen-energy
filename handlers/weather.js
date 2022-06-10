const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());

const {gethouse} =  require('../routes/weather.js')


app.use('/weather', gethouse)

module.exports.handler = serverless(app);