const mongoose = require("mongoose");
const dotenv = require("dotenv"); //importing dotenv to load environment variables from .env file
dotenv.config(); // .config() method loads environment variables from a .env file into process.env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
