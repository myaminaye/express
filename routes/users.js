var express = require("express");
var path = require("path");
var router = express.Router();
var users = require("./../controller/UsersController");

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

router.get("/:userId", users.getUserById, function (req, res, next) {
  console.log("get user by id");
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

// router.get("/redirect", function (req, res, next) {
//   console.log("redirect route");
//   res.redirect("/login");
// });

router.get("/file", function (req, res, next) {
  const filePath = path.resolve(__dirname, "./../public/static/hello.txt");
  console.log("getFile", filePath);
  res.sendFile(filePath);
});

router.get("/download", function (req, res, next) {
  const filePath = path.resolve(__dirname, "./../public/static/hello.txt");
  console.log("getFile", filePath);
  res.download(filePath, "hello.txt", function (err) {
    if (err) {
      next(err); // Handle error, but keep in mind the response may be partially-sent
    } else {
      console.log("File download initiated");
    }
  });
});

module.exports = router;
