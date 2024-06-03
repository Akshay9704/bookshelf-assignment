import React from 'react'

const Books = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-12 mx-8">
        <div className="p-3.5 h-96 w-10/12 space-y-8 rounded-lg border-2 border-black ">
          <div className="flex gap-4">
            <h1 className="text-xl font-extrabold">Book Title:</h1>
            <p className="text-lg">The Lord of the Rings</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl font-extrabold">Edition Count:</p>
            <p className="text-xl">159</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg">Add to bookshelf</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Books