const express = require("express");
const router = express.Router();
const heatService = require("../services/heatloss");
module.exports = {
  calcutateHeatLoose: router.get("/heatloss", async (req, res) => {
    try {
      const heatlos = await heatService.calculateloss(req.body);
      return res.status(200).send({data:heatlos});

    } catch (error) {
      res.status(500).send(error.message)
    }
  }),
};
