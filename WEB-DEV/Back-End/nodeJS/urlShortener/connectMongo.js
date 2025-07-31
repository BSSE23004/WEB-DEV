const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected Successfully!!!");
  } catch (error) {
    console.error("MongoDB couldn't connect due to this error : \n", error);
  }
}

module.exports = connectDB;
