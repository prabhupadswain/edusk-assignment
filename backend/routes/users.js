const express = require("express");
const router = express.Router();

// Controllers
const {
  getAllUsers,
  addNewUser,
  editAnUser,
} = require("../controllers/userControllers");

// Validation
// Same validation performed for creating new user or editing existing user
const { newUserValidation } = require("../validation/userValidation");

// BASE URL : http://localhost:5000

// Route: GET /api/users & POST /api/users
router.route("/").get(getAllUsers).post(newUserValidation, addNewUser);

// Route: PUT /api/users/:id
router.route("/:id").put(newUserValidation, editAnUser);

module.exports = router;
