// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

// load env Server
dotenv.config();
// console.log(process.env);

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to Database

// Core's configuration


// Middleware
// Increase body size limit for JSON & URL-encoded payloads
app.use(express.json());


// Routes (entry get way)
// app.get("/api/products", (req, res)=> {
//   res.send("Product route is working")
// });
app.use("/api/auth", authRoutes);

// API Documentation

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from Baby mart!!");
});

// Error Handler

// Start Server setup
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`Client URL: ${process.env.CLIENT_URL}`);
  console.log(`Admin URL: ${process.env.ADMIN_URL}`);
  console.log(`API docs available at: http://localhost:${PORT}/api/docs`);
});
