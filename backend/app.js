const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");

const logger = require("./middlewares/logger.js");
// const connectDB = require("./config/db.js");

// Import Routes
const users = require("./routes/users.js");

// Load Environment Variables
dotenv.config();

// Cross-Origin Resource Sharing
app.use(cors());

// Bddy Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Connect DB
// connectDB();

//Define Routes
app.use("/api/users", users);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(`Error Name: ${err.name}`.bgRed);
  console.error(`Error Code: ${err.code}`.bgRed);
  console.error(`Error Stack: ${err.stack}`.red);

  res.status(500).json({
    message: "Internal Server Error",
  });
});

// Set PORT
const PORT = process.env.PORT || 5000;

// Listen to incoming requests.
app.listen(PORT, () => console.log(`SERVER started at PORT:${PORT}`));
