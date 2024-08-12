var todoService = require("./../service/TodosService");

function getAllTodo(req, res, next) {
  res.json(todoService.getAllTodo());
}

function getTodoById(req, res, next) {
  let id = req.params["todoId"];
  res.json(todoService.getToDoById(id));
}

function saveTodo(req, res, next) {
  let todo = req.body;
  res.json(todoService.saveTodo(todo));
}

module.exports = { getAllTodo, getTodoById, saveTodo };
