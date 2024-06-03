import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-evenly items-center mt-8">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl font-extrabold">Search by book name:</h1>
                <input type="text" className="border-2 border-black w-60 px-4 py-1 rounded-lg" />
            </div>
            <div className="justify-self-end">
                <button onClick={() => navigate('/bookshelf')} className="bg-green-500 text-white py-2 px-6 rounded-lg">By Bookshelf</button>
            </div>
        </div>
    )
}

export default Header