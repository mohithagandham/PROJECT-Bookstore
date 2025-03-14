import { useState } from "react";
import axios from "axios";

export default function BookForm({ fetchBooks }) {
    const [book, setBook] = useState({ Name: "", Author: "", Price: "" });

    const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/api/books/AddBook", book);
        fetchBooks();
        setBook({ Name: "", Author: "", Price: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="Name" placeholder="Book Name" value={book.Name} onChange={handleChange} />
            <input name="Author" placeholder="Author" value={book.Author} onChange={handleChange} />
            <input name="Price" placeholder="Price" value={book.Price} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
}
