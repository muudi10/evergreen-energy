const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose')
const connectToDatabase = async () => {
    let isConnected;
    if (isConnected) {
      console.log("using existing database connection");
      return Promise.resolve();
    }
  
    console.log("using new database connection");
    const database = await mongoose.connect(URI, { useNewUrlParser: true });
  
    isConnected = database.connections[0].readyState;
  
    // return isConnected;
  };
  module.exports = connectToDatabase;
  

