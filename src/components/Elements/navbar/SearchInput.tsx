import React, { useState } from 'react';
import { motion } from 'framer-motion';

const suggestions = ['Laptop', 'Smartphone', 'Keyboard', 'Mouse', 'Headphones'];

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowSuggestions(term.length > 0); // Tampilkan saran jika ada input
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Cari barang..."
        className="border p-2 rounded w-64"
      />
      {showSuggestions && (
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bg-white w-64 shadow mt-2 py-1 rounded"
        >
          {suggestions
            .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </motion.ul>
      )}
    </div>
  );
};

export default SearchInput;
