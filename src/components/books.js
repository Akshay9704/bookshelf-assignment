import React, { useContext } from 'react';
import BookContext from '../context/bookContext';
import toast, { Toaster } from 'react-hot-toast';

const Books = () => {
  const { books, bookshelf, setBookshelf, searchQuery } = useContext(BookContext);

  const handleBookshelf = (book) => {
    setBookshelf((prevState) => [...prevState, book]);
    toast.success('Book added to bookshelf!');
  }

  const availableBooks = books
    .filter(book => !bookshelf.some(shelfBook => shelfBook.key === book.key))
    .filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mx-8">
        {availableBooks.map((book) => (
          <div key={book.key} className="p-3.5 h-96 w-10/12 space-y-8 rounded-lg border-2 border-black">
            <div className="flex gap-4">
              <h1 className="text-xl font-extrabold">Book Title:</h1>
              <p className="text-lg">{book.title}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xl font-extrabold">Edition Count:</p>
              <p className="text-xl">{book.edition_count}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={() => handleBookshelf(book)} className="bg-green-500 text-white py-2 px-6 rounded-lg">Add to bookshelf</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books;
