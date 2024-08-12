var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("first route");
  res.send("respond with a resource");
  next();
});

router.get("/", function (req, res, next) {
  console.log("second route");
  res.send("respond with a resource");
});

router.get("/one", function (req, res, next) {
  res.send("user one routeone");
});

router.get("/ab?cd", function (req, res, next) {
  console.log("ab?cd");
  res.send("<h1>ab?cd</h1>");
});

router.get("/ab+cd", function (req, res, next) {
  console.log("ab+cd");
  res.send("<h1>ab+cd</h1>");
});

router.get("/:userId", function (req, res, next) {
  res.json({
    userId: req.params.userId,
    userName: "Moshi Moko Mono",
  });
});

router.get("/:userId/books/:bookId", function (req, res, next) {
  res.json({
    userId: req.params.userId,
    bookId: req.params.bookId,
    bookName: "Pride and Prejudice Jane Austen",
  });
});

router.post("/", function (req, res, next) {
  res.json({
    name: "abc",
  });
});

module.exports = router;
