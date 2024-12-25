const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addNewUser,
  editAnUser,
} = require("../controllers/userControllers");

const { newUserValidation } = require("../validation/userValidation");

router.route("/").get(getAllUsers).post(newUserValidation, addNewUser);
router.route("/:id").put(newUserValidation, editAnUser);

module.exports = router;
