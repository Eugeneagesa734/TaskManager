const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userControllers");

const router = express.Router();

// User management routes
router.get("/", protect, adminOnly, getUsers); // Geting all users (admin only)
router.get("/:id", protect, adminOnly, getUserById); //getting a specific user

module.exports = router;