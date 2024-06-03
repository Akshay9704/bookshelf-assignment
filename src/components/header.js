import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookContext from '../context/bookContext';

const Header = () => {
    const { setSearchQuery } = useContext(BookContext);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex justify-evenly items-center mt-8">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl font-extrabold">Search by book name:</h1>
                <input 
                    type="text" 
                    className="border-2 border-black w-60 px-4 py-1 rounded-lg" 
                    value={query}
                    onChange={handleSearch}
                />
            </div>
            <div className="justify-self-end">
                <button onClick={() => navigate('/bookshelf')} className="bg-green-500 text-white py-2 px-6 rounded-lg">By Bookshelf</button>
            </div>
        </div>
    )
}

export default Header;
