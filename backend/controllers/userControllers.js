const User = require("../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const [users] = await User.getAllUsers();
    if (!users.length) {
      const error = Error(`Requested resource is not available currently.`);
      error.status = 404;
      return next(error);
    }
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

const addNewUser = async (req, res, next) => {
  try {
    // Extract data from request body
    const { username, email, age } = req.body;

    // Save an user to DB
    const user = new User(username, age, email);
    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
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

const editAnUser = async (req, res, next) => {
  try {
    // Construct new object of record to be updated
    // from extracted request body

    const recordToUpdate = {
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
    };

    // Extract user id from url parameter
    const userId = req.params.id;
    if (isNaN(Number(userId))) {
      const error = Error(`Invalid URL Parameter. Parameter must be numeric.`);
      error.status = 404;
      return next(error);
    }

    // Edit an existing user
    await User.editAnUser(userId, recordToUpdate);
    //console.log(result);

    res
      .status(200)
      .json({ success: true, message: "User information modified" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  editAnUser,
};
