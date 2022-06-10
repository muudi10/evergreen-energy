const PumpService = require("../services/pumpCost/");
const express = require("express");
const router = express.Router();
const conection = require("../utils/mongo.utils");
module.exports = {
  getPumpCost: router.get("/", async (req, res) => {
    if (!req.query.capacity) {
      res
        .status(422)
        .send("Please provide a valid pump capacity as a query parameter");
    } else {
      await conection();
      try {
        const totalCost = await PumpService.calculatePumpCost(
          req.query.capacity
        );
        return res.status(200).send({ data: totalCost });
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  }),
};
