let todos = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
];

function getAllTodo() {
  return todos;
}

function getToDoById(id) {
  return todos.filter((todo) => todo.id == id);
}

function saveTodo(todo) {
  todos.push(todo);
  return todos;
}

module.exports = {
  getAllTodo,
  getToDoById,
  saveTodo,
};
