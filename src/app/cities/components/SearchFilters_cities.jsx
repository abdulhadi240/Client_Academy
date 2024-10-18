// components/SearchFilters.js
const SearchFiltersCities = () => {
  return (
    <div className="md:w-[600px] md:flex shadow-lg mb-20 p-6 md:p-0 rounded-xl">
      <div className="flex justify-center">
        <div className="grid items-center justify-center grid-cols-1 gap-4 p-3 sm:grid-cols-2 md:flex md:gap-4 md:p-4 rounded-xl">
          {/* Search Input */}
          <input
            className="flex justify-center p-2 text-sm bg-gray-300 border rounded-lg placeholder:text-xs text-black/70 max-w-64"
            placeholder="Search In Specialization"
          />

          {/* Specialization Dropdown */}
          <select className="flex justify-center p-2 text-sm bg-gray-300 border rounded-lg text-black/70 max-w-64">
            <option>Specialization</option>
          </select>

          {/* Manager Dropdown */}
          <select className="flex justify-center p-2 text-sm bg-gray-300 border rounded-lg text-black/70 max-w-64">
            <option className="flex justify-center">Manager</option>
          </select>
        </div>
      </div>
      {/* Search Button */}
      <div className="flex justify-center md:items-center md:mt-0">
        <button className="items-center px-20 py-2 text-sm text-white transition-all duration-300 ease-in-out rounded-lg md:px-8 bg-primary hover:bg-primary-dark">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFiltersCities;
