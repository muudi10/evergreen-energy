const HeatpumpSchema = require("../../models/heatPump.shema");
const { suitablePump } = require("../../helpers/helpers");

module.exports = {
  async heatPump(req) {
    try {
      const pumps = await HeatpumpSchema.where("outputCapacity").gte(req);
      if (pumps.length > 0) {
        return suitablePump(pumps, req);
      } else if (pumps.length <= 0) {
        return "no pumps found";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
