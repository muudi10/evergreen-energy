const router = require("express").Router();
const HouseSchema = require("../models/house.schema");
module.exports = {
  gethouse: router.get("/", async function (req, res) {
    if (!req.query.location) {
      return res.status(400).send({
        message: "Please provide location query",
      });
    }
    try {
      const house = await HouseSchema.findOne({
        location: req.query.location,
      });
      if (!house) {
        return res
          .status(404)
          .send("Could not find design region " + req.query.location);
      }
      res.status(200).send({ location: house });
    } catch (error) {
      res.status(500).send(error);
    }
  }),
};
