const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURI = process.env.DB_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
