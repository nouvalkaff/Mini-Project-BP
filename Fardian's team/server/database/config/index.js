const mongoose = require("mongoose");

//Require dotenv
require("dotenv").config();

// Setup Connection to Database
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Database is Connected.");
  } catch (error) {
    console.log(error);
  }
};

mongoose.set("useFindAndModify", false);

module.exports = dbConnection;
