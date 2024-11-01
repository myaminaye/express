const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todos", ToDoSchema);
