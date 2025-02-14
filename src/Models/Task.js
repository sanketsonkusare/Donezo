const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ["to-do", "In progress", "Completed"], 
    default: "to-do" 
  },
  category: { 
    type: String, 
    enum: ["personal", "Work", "Health"], 
    required: true 
  },
  dueDate: { type: Date, required: true }, 
});

module.exports = mongoose.model("Task", TaskSchema);
