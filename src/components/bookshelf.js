import React, { useContext } from 'react';
import BookContext from '../context/bookContext';
import toast, { Toaster } from 'react-hot-toast';

const BookShelf = () => {
  const { bookshelf, setBookshelf } = useContext(BookContext);

  const handleRemoveBook = (bookKey) => {
    setBookshelf((prevState) => prevState.filter((book) => book.key !== bookKey));
    toast.error('Book removed from bookshelf!');
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mx-8">
        {bookshelf.map((book, index) => (
          <div key={index} className="p-3.5 h-96 w-10/12 space-y-8 rounded-lg border-2 border-black">
            <div className="flex gap-4">
              <h1 className="text-xl font-extrabold">Book Title:</h1>
              <p className="text-lg">{book.title}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xl font-extrabold">Edition Count:</p>
              <p className="text-xl">{book.edition_count}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={() => handleRemoveBook(book.key)} className="bg-red-500 text-white py-2 px-6 rounded-lg">Remove from bookshelf</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookShelf;
