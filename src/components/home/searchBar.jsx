import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchValue, setSearchValue] = useState('');

    const handleValueChange = (e) => setSearchValue(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="flex items-center">
      <input
        className="p-2 border rounded-l focus:outline-none"
        type="text"
        value={searchValue}
        onChange={handleValueChange}
        placeholder="Search..."
      />

      <button
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
        onClick={handleSearch}>
            Search
      </button>
    </div>
  );
}

export default SearchBar;
