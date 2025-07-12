const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const verifyToken = require("../middleware/auth");

// Get user-specific todos
router.get("/", verifyToken, async (req, res) => {
  const todos = await Todo.find({ userId: req.userId });
  res.json(todos);
});

router.post("/", verifyToken, async (req, res) => {
  const todo = new Todo({ title: req.body.title, userId: req.userId });
  await todo.save();
  res.status(201).json(todo);
});

router.put("/:id", verifyToken, async (req, res) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete("/:id", verifyToken, async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Deleted" });
});

module.exports = router;
