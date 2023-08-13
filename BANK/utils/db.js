// database connection

// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
  //   console.log("hello database");
  try {
    console.log(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB database ${conn.connection.host}`);
  } catch (error) {
    console.log("hi");
    console.log(`Error in MongoDB: ${error}`);
  }
};

module.exports = connectDB;
