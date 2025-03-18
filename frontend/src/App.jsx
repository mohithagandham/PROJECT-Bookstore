import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

export default function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get("http://localhost:3001/api/books/GetBooks");
        setBooks(res.data.data);
    };

    useEffect(() => { fetchBooks(); }, []);

    return (
        <div>
            <h1>Bookstore</h1>
            <BookForm fetchBooks={fetchBooks} />
            <BookList books={books} fetchBooks={fetchBooks} />
        </div>
    );
}
