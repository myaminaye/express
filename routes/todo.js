var express = require("express");
var router = express.Router();
var todos = require("./../controller/ToDosController");

router.get("/", todos.getAllTodo);
router.get("/:todoId", todos.getTodoById);
router.post("/", todos.saveTodo);

module.exports = router;
