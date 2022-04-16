const asyncHandler = require("express-async-handler");
// Goals Route Controllers

// @desc Get Goals
// @rout GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Get Goal` });
});

// @desc POST Set Goals
// @rout /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Pleas add a text field`);
  }
  res.json({ message: `Set Goal` });
});

// @desc  Update Goals
// @rout PUT /api/goals/:id
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

// @desc delete Goals
// @rout Delete /api/goals/:id
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
