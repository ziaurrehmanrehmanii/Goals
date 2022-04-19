const express = require("express");
// Goals Route Object
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../Controllers/goalController");
const { protect } = require("../Middleware/authMiddleware");

router.route(`/`).get(protect, getGoals).post(protect, setGoals);
router.route(`/:id`).put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
