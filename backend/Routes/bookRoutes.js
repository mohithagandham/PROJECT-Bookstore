const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");

router.get("/GetBooks", bookController.getBooks);
router.post("/AddBook", bookController.addBook);
router.put("/UpdateBook/:name", bookController.updateBook);
router.delete("/DeleteBook/:name", bookController.deleteBook);

module.exports = router;
