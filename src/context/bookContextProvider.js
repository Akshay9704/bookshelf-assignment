import React, { useEffect, useState } from "react";
import BookContext from "./bookContext";

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [bookshelf, setBookshelf] = useState(() => {
        const savedBookshelf = localStorage.getItem('bookshelf');
        return savedBookshelf ? JSON.parse(savedBookshelf) : [];
    });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }, [bookshelf]);

    async function fetchBooks() {
        try {
            const response = await fetch("https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1");
            const data = await response.json();
            setBooks(data.docs);
        } catch (error) {
            console.error("Error fetching books: ", error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books, setBooks, bookshelf, setBookshelf, searchQuery, setSearchQuery }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
