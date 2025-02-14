const express = require("express");
const Task = require("../Models/Task");
const router = express.Router();

// Create a new task
router.post("/", async (req, res) => {
  const { userId, text, description, status, category, dueDate } = req.body;

  if (!text || !category || !dueDate) {
    return res.status(400).json({ message: "Task name, category, and due date are required" });
  }

  try {
    const newTask = new Task({ userId, text, description, status, category, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err });
  }
});

module.exports = router;
