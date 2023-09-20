import React from "react";

const SearchInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="hidden md:block ml-4 px-2 py-1 bg-gray-700 rounded"
    />
  );
};

export default SearchInput;
