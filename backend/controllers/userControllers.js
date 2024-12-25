const User = require("../models/User");

// Base URL: http://localhost:5000

// Controller: Retrieve all users
// Path: /api/users
// HTTP Method: GET
const getAllUsers = async (req, res, next) => {
  try {
    // Fetch all users from DB
    const [users] = await User.getAllUsers();

    // Check if atleast one user is available on DB.
    // Else if no users available on DB, send 4xx error - 404
    if (!users.length) {
      const error = Error(`Requested resource is not available currently.`);
      error.status = 404;
      return next(error);
    }

    // Send all users to client
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

// Controller: Create new user
// Path: /api/users
// HTTP Method: POST
const addNewUser = async (req, res, next) => {
  try {
    // Extract data from request body
    const { username, email, age } = req.body;

    // Save an user to DB
    const user = new User(username, age, email);

    // This returns some info processed from DB if successful
    // If not exception handled as 500 error.
    await user.save();

    // Send single user profile record if operation successful
    res.status(201).json({
      success: true,
      msg: "Created",
      createdUser: {
        username: user.username,
        age: user.age,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Controller: Edit existing user
// Path: /api/users/:id
// HTTP Method: PUT
// Params: id
const editAnUser = async (req, res, next) => {
  try {
    // Extract user id from url parameter
    // Check if it is valid numeric URL parameter
    // Else send 4xx error - 404
    const userId = req.params.id;
    if (isNaN(Number(userId))) {
      const error = Error(`Invalid URL Parameter. Parameter must be numeric.`);
      error.status = 404;
      return next(error);
    }

    // Construct new object of user record to be updated
    // Extracted from request body
    const recordToUpdate = {
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
    };

    // Edit an existing user
    // Returns information if successful from DB.
    // If not exception handled 500 error
    await User.editAnUser(userId, recordToUpdate);

    // If operation successful and no error encountered from DB
    // Send response to client
    res.status(200).json({ success: true, msg: "Modified" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  editAnUser,
};
