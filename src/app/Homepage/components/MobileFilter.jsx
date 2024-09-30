// components/SearchForm.js
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';

export default function SearchForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Search bar */}
        <div className="flex items-center w-full border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Find Your Course"
            className="w-full p-2 rounded-md focus:outline-none"
          />
          <button className="p-2 text-white bg-blue-600 rounded-md">
            <AiOutlineSearch size={20} />
          </button>
        </div>

        {/* Year field */}
        <div className='grid grid-cols-2 gap-3'>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Year"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="p-2 bg-gray-100 rounded-md">
            <AiOutlineCalendar size={20} />
          </button>
        </div>

        {/* Month field */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Month"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="p-2 bg-gray-100 rounded-md">
            <AiOutlineCalendar size={20} />
          </button>
        </div>

        {/* Subject dropdown */}
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Subject</option>
          {/* Add more options here */}
        </select>

        {/* Language dropdown */}
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Language</option>
          {/* Add more options here */}
        </select>

        {/* Category dropdown */}
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Category</option>
          {/* Add more options here */}
        </select>

        {/* Place dropdown */}
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Place</option>
          {/* Add more options here */}
        </select>
      </div>
      </div>

      
    </div>
  );
}
