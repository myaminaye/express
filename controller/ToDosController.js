let todoService = require("./../service/TodosService");

// function getAllTodo(req, res, next) {
//   res.json(todoService.getAllTodo());
// }

async function getAllTodo(req, res) {
  let todos = await todoService.getAllTodo();
  res.json(todos);
}

async function getTodoById(req, res, next) {
  let id = req.params["todoId"];
  try {
    let todo = await todoService.getToDoById(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(400).json(todo);
    }
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function saveTodo(req, res, next) {
  let todo = req.body;
  try {
    let newTodo = await todoService.saveTodo(todo);
    if (newTodo) {
      res.status(201).json(newTodo);
    } else {
      res.status(400).json(newTodo);
    }
  } catch (err) {
    res.status(404).json({ err });
  }
  // res.json(todoService.saveTodo(todo));
}

async function updateTodo(req, res, next) {
  let todoId = req.params["todoId"];
  let todo = req.body;
  try {
    let updatedTodo = await todoService.updateTodo(todoId, todo);
    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(400).json(updatedTodo);
    }
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function deleteTodo(req, res, next) {
  let todoId = req.params["todoId"];
  try {
    let todo = await todoService.deleteTodo(todoId);

    if (todo) {
      res.status(200).json({ success: true, data: todo });
    } else {
      res.status(400).json({ success: false, message: "Failed to delete todo." });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
}

module.exports = { getAllTodo, getTodoById, saveTodo, updateTodo, deleteTodo };
