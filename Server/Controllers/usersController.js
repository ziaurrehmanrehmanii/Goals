const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../Models/userModel");

// @desc Delete Users
// @rout GET /api/users/
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
  const User = await user.findById(req.params.id);
  if (!User) {
    res.status(400);
    throw new Error("User not found");
  }
  User.delete();
  res.json({
    massage: "This user has been deleted",
    user: User,
  });
});

// @desc Get Users Lsit
// @rout GET /api/users/me
// @access Public
const getUserList = asyncHandler(async (req, res) => {
  const User = await user.find();
  res.json(User);
});

// @desc Get Users Data
// @rout GET /api/users/me
// @access private
const getMe = (req, res) => {
  res.json({ Massege: "Users Data" });
};
// @desc Register Users
// @rout Post /api/users
// @access Public
const RegisterUsers = asyncHandler(async (req, res) => {
  // Get Data from Body
  const { email, password, name } = req.body;
  // Check if Body contains Data
  if (!email || !password || !name) {
    res.status(404);
    throw new Error(`user Required`);
  }
  // Check if user exists
  const userExists = await user.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error(`user already exists`);
  }

  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  const Password = await bcrypt.hash(password, salt);
  // Save to database
  const User = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: Password,
  });

  if (User) {
    res.status(201).json({
      _id: User._id,
      name: User.name,
      email: User.email,
    });
  } else {
    res.status(400);
    throw new Error(`invalid user data`);
  }
});
// @desc Login Users
// @rout Post /api/users/login
// @access Public
const LoginUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check user email
  const User = await user.findOne({ email });

  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User._id,
      name: User.name,
      email: User.email,
    });
  } else {
    res.status(404);
    throw new Error("invalide credentials");
  }
});

module.exports = { getMe, RegisterUsers, LoginUsers, getUserList, deleteUser };
