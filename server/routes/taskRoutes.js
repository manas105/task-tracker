const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Create & Get All
router.route("/")
  .post(createTask)
  .get(getAllTasks);

// Get One, Update, Delete
router.route("/:id")
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;