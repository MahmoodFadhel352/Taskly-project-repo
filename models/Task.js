// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    status: Boolean
  }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
