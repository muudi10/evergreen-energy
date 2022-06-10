const URI = process.env.MONGODB_URI;
const mongoose = require("mongoose");

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(URI);
    } catch (error) {
      throw new Error(error);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.disconnect();
    } catch (error) {
      throw new Error(error);
    }
  },
};
