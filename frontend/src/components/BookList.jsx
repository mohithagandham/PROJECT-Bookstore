import axios from "axios";

export default function BookList({ books, fetchBooks }) {
    const deleteBook = async (name) => {
        await axios.delete(`http://localhost:3001/api/books/DeleteBook/${name}`);
        fetchBooks();
    };

    return (
        <div>
            {books.map((book, index) => (
                <div key={index}>
                    <p>{book.Name} by {book.Author} - ${book.Price}</p>
                    <button onClick={() => deleteBook(book.Name)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
