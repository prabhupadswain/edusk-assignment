const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// Check if email already exists or not
const checkEmailNotInUSe = async (emailToCheck) => {
  const [data] = await User.checkEmailExistsOrNot(emailToCheck);

  if (data[0].count > 0) throw new Error("E-Mail already in use");
};

// New User Creation Validation
// 1. Check if Username & Email is coming from client side.
// 2. Check for valid email.
// 3. Check email exists or not in the database before adding a new user.
// 4. Check if age entered is numeric.

exports.newUserValidation = [
  body("username", "Username is required.").notEmpty(),
  body("age", "Please, enter age in number.").isNumeric().optional(),
  body("email", "Email cannot be left blank.")
    .notEmpty()
    .isEmail()
    .withMessage("Valid Email is required")
    .custom(checkEmailNotInUSe),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
];
