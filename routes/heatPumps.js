const PumpService = require("../services/heatPump/");
const express = require("express");
const router = express.Router();
const conection = require("../utils/mongo.utils");
module.exports = {
  getHeatPump: router.get("/", async (req, res) => {
    if (!req.query.heatloss) {
      res.status(422).send("Please provide heat loss as a query parameter");
    } else {
      await conection();
      try {
        const heatPumps = await PumpService.heatPump(req.query.heatloss);
        return res.status(200).send({ data: heatPumps });
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  }),
};
