let Todos = require("../model/Todo");

async function getAllTodo() {
  return Todos.find(); // return all
}

async function getToDoById(id) {
  // return todos.filter((todo) => todo.id == id);
  return Todos.findById(id);
}

async function saveTodo(todo) {
  // todos.push(todo);
  // return todos;
  let newTodo = new Todos(todo);
  return newTodo.save();
}

async function updateTodo(todoId, todo) {
  let updatedTodo = await Todos.findByIdAndUpdate(todoId, todo, { new: true });
  return updatedTodo;
}

async function deleteTodo(todoId) {
  let todo = await Todos.findById(todoId);

  if (!todo) {
    throw new Error("Todo id is not found.");
  }

  let deletedTodo = await Todos.findByIdAndDelete(todoId);
  return deletedTodo;
}

module.exports = {
  getAllTodo,
  getToDoById,
  saveTodo,
  updateTodo,
  deleteTodo,
};
