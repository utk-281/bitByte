const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectDB = asyncHandler(async (req, res) => {
  let client = await mongoose.connect(process.env.MONGODB_URL);
  console.log(`database connected ${client.connection.host}`);
});

module.exports = { connectDB };

//! atlas ==> log in ==> new project ==> provide a name ==> next=> next ==> create project ==> create cluster ==> select the free version ==> create deployment ==> create db user ==> choose connection method ==> create connection string ==> use the string in .env
