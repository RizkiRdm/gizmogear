import React from "react";

const SearchInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search Product"
      className="md:block px-2 py-1 bg-gray-700 rounded w-full mx-auto"
    />
  );
};

export default SearchInput;
