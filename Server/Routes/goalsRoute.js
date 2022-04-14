const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../Controllers/goalController");

router.route(`/`).get(getGoals).post(setGoals);
router.route(`/:id`).put(setGoals).delete(deleteGoals);

module.exports = router;
