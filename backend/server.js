const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require("./routes/employees");
const authRoutes = require("./routes/auth"); // If you have authentication routes

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://localhost:27017/employeeDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/employees", employeeRoutes); // Employee CRUD routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
