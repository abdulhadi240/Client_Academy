// components/SearchForm.js
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';

export default function SearchForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Search bar */}
        <div className='flex gap-2'>
        <div className="flex items-center w-full bg-gray-100 border rounded-xl ">
        <AiOutlineSearch size={25} />

          <input
            type="text"
            placeholder="Find Your Course"
            className="w-full p-1 bg-gray-100 rounded-md focus:outline-none"
          />
          
        </div>          
          <button className="flex items-center justify-between gap-4 py-1 px-2 text-white bg-[#152765] rounded-xl ">
            <AiOutlineSearch size={20} />
            <div>Search</div>

          </button>
        </div>

        {/* Year field */}
        <div className='flex gap-2 '>
        <div className="flex items-center bg-gray-100 space-x-2 border-[1px]">
          <input
            type="number"
            placeholder="Year"
            className="w-full p-2 bg-gray-100 rounded-md placeholder:text-black"
          />
          <button className="p-2 rounded-md">
            <AiOutlineCalendar size={20} />
          </button>
        </div>

        {/* Month field */}
        <div className="flex items-center bg-gray-100 space-x-2 border-[1px]">
          <input
            type="text"
            placeholder="Month"
            className="w-full p-2 bg-gray-100 border-0 rounded-md placeholder:text-black"
          />
          <button className="p-2 rounded-md">
            <AiOutlineCalendar size={20} />
          </button>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
        {/* Subject dropdown */}
        <select className="p-2 bg-gray-100 border ">
          <option>Subject</option>
          {/* Add more options here */}
        </select>

        {/* Language dropdown */}
        <select className="p-2 bg-gray-100 border ">
          <option>Language</option>
          {/* Add more options here */}
        </select>

        {/* Category dropdown */}
        <select className="p-2 bg-gray-100 border ">
          <option>Category</option>
          {/* Add more options here */}
        </select>

        {/* Place dropdown */}
        <select className="p-2 bg-gray-100 border ">
          <option>Place</option>
          {/* Add more options here */}
        </select>
        </div>
      </div>
      </div>

      
    
  );
}
