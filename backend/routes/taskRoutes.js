const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// Task Managagement routes
router.get("/dashboard-data", protect, getDasgboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //get all tasks(Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); //get task by id
router.post("/", protect, adminOnly, createTask);  // Create Task(Admin only
router.put("/:id", protect, updateTask) // Update Task Details(Admin only)
router.delete("/:id", protect, adminOnly, deleteTask); // Delete Task(Admin only)
router.put("/:id/status", protect, updateTaskStatus); //Update Task status
router.put("/:id/todo", protect, updateTaskChecklist); //update task check list

module.exports = router;
