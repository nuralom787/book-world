import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div className="my-28">
            <div className="text-center">
                <h1 className="font-bold text-4xl text-[#131313]">Books</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    books.map(book => <Book
                        key={book.bookId}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;