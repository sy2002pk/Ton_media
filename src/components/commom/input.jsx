import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative">
      {/* Shadow Background */}
      <div className={`
        absolute inset-0 
        rounded-full 
        transition-all duration-150
        -z-10
        ${isFocused 
          ? 'shadow-[0_3px_0_rgba(0,0,0,0.2)] translate-y-[2px]' 
          : 'shadow-[0_4px_0_rgba(0,0,0,0.2)]'
        }
      `}></div>
      
      {/* Input Container */}
      <div className={`relative transition-all duration-150 ${isFocused ? 'translate-y-[2px]' : ''}`}>
        <input 
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Finextra..."
          className={`
            w-full
            pl-4 pr-10 py-2 
            rounded-full 
            border-2 
            outline-none
            relative
            z-10
            transition-all duration-150
            ${isFocused 
              ? 'bg-gradient-to-r from-[#00D1B2] to-[#4CAF50] border-transparent text-white placeholder-white'
              : 'border-gray-200 bg-white text-gray-700 placeholder-gray-400'
            }
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FiSearch className={`
          absolute right-4 top-1/2 -translate-y-1/2 
          transition-colors duration-150
          z-10
          ${isFocused ? 'text-white' : 'text-gray-400'}
        `} />
      </div>
    </div>
  );
};

export default SearchInput;
