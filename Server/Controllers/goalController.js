const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");
const User = require("../Models/userModel");
// Goals Route Controllers
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @desc Get Goals
// @rout GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.json(goals);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @desc POST Set Goals
// @rout /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  // check if goals text is  set
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Pleas add a text field`);
  }
  // save go database
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.json(goal);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @desc  Update Goals
// @rout PUT /api/goals/:id
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error(`Goal not found`);
  }
  // find user
  const User = await User.findById(req.user.id);
  // check if user exists
  if (!User) {
    res.status(400);
    throw new Error("User not found");
  }
  // check if user matches goals user
  if (goals.user.toString() !== User.id) {
    res.status(401);
    throw new Error("User Not authorized");
  }
  // updateGoals in database
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @desc delete Goals
// @rout Delete /api/goals/:id
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    res.status(404);
    throw new Error("Goal not found");
  }
  // find user
  const User = await User.findById(req.user.id);
  // check if user exists
  if (!User) {
    res.status(400);
    throw new Error("User not found");
  }
  // check if user matches goals user
  if (goals.user.toString() !== User.id) {
    res.status(401);
    throw new Error("User Not authorized");
  }
  // remove goals
  goals.remove();
  res.json({ id: req.params.id });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
