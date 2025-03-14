const Book = require("../Models/bookModel");

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json({ status: "success", data: books });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

module.exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.json({ status: "success", data: newBook });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

module.exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { Name: req.params.name },
            req.body,
            { new: true }
        );
        if (!updatedBook) return res.status(404).json({ status: "fail", message: "Book not found" });
        res.json({ status: "success", data: updatedBook });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

module.exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ Name: req.params.name });
        if (!deletedBook) return res.status(404).json({ status: "fail", message: "Book not found" });
        res.json({ status: "success", message: "Book deleted successfully", data: deletedBook });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};
