const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Author: { type: String, required: true },
    Price: { type: Number, required: true },
});

const Book = mongoose.model("BookStore", bookSchema);
module.exports = Book;
