const express = require("express");
const app = express();

// Import Environment Configuration & CORS
const dotenv = require("dotenv");
const cors = require("cors");

// Import Middlewares
const logger = require("./middlewares/logger.js");
const { errorHandler, notFound } = require("./middlewares/errorHandler.js");

// Import Routes
const users = require("./routes/users.js");

// const connectDB = require("./config/db.js"); /*  <-- OMITTED as SEQUELIZE not used anymore AS of NOW --> */

/* ----- ALL IMPORTS/REQUIRE done as of here at this LINE ----- */

// Load Environment Variables
dotenv.config();

// Cross-Origin Resource Sharing
app.use(cors());

// Body JSON, URL encoded parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Connect DB
// connectDB(); /* <-- OMITTED as SEQUELIZE not used anymore AS of NOW  --> */

//Define Routes
app.use("/api/users", users);

//Error Handler Middleware - Page Not Found/Not Found/Server Error
app.use(notFound);
app.use(errorHandler);

// Set PORT
const PORT = process.env.PORT || 5000;

// Listen to incoming requests.
app.listen(PORT, () =>
  console.log(`SERVER running at http://localhost:${PORT}`.bgBlue)
);
