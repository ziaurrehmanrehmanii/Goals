const express = require("express");
const {
  getMe,
  RegisterUsers,
  LoginUsers,
  getUserList,
  deleteUser,
} = require("../Controllers/usersController");
const { protect } = require("../Middleware/authMiddleware");
const router = express.Router();

router.route("/login").post(LoginUsers);
router.route("/").post(RegisterUsers);
router.route("/me").get(protect, getMe);
router.route("/").get(getUserList);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
