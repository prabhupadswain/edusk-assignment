const User = require("../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const [users] = await User.getAllUsers();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

const addNewUser = (req, res) => {
  try {
    const { username, email, age } = req.body;
    console.log(req.body);
    // if (username && email) {
    // }
  } catch (error) {
    next(error);
  }
  res.status(201).json({ id: 2, job: "Shyam" });
};

const editAnUser = (req, res) => {
  res.status(200).json("User Edit");
};
module.exports = {
  getAllUsers,
  addNewUser,
  editAnUser,
};
