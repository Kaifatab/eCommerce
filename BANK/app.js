// import express from "express";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import cors from "cors";
// import { connectDB } from "./utils/db";

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./utils/db");
const bankController = require("./controllers/bank-controller");
//configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.post("/make-payment", (req, res, next) => {
//   const { from, to, amount } = req.body;
// });

app.post("/create-account", bankController.createAccount);
app.post("/make-payment", bankController.make_payment);
app.get("/get-balance", bankController.get_balance);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to eCommerce App</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
