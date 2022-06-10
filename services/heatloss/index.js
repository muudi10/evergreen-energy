const axios = require("axios");
const baseUrl = "http://localhost:3000"; //to change later
const { heatLoss } = require("../../helpers/helpers");
module.exports = {
  async calculateloss(req) {
    const { floorArea, heatingFactor, insulationFactor, location } = req;
    const loss = heatLoss(floorArea, heatingFactor, insulationFactor);
    try {
      const { data } = await axios.get(
        `${baseUrl}/weather/?location=${location}`
      );
      const { degreeDays } = data.location;
      const powerLoss = Math.ceil(loss / degreeDays);
      return powerLoss;
    } catch (error) {
      return error;
    }
  },
};
