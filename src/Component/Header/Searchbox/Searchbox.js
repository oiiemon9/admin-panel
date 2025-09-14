import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';

const Searchbox = () => {
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
  ];

  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null); // Create a reference for the entire search component

  useEffect(() => {
    if (inputValue) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  }, [inputValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is outside the search box
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedIndex(-1); // Reset selected index when typing
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredItems.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      setInputValue(filteredItems[selectedIndex]);
      setDropdownVisible(false);
    } else if (e.key === 'Escape') {
      setDropdownVisible(false);
    }
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setDropdownVisible(false);
  };

  return (
    <div ref={searchRef} className="max-w-sm w-full relative me-2">
      <CiSearch className="absolute text-xl top-0 bottom-0 m-auto left-3 text-gray-400" />
      <motion.input
        initial={{ boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)' }}
        whileFocus={{ boxShadow: ' 0px 0px 0px 2px rgba(59,130,246,1)' }}
        transition={{ duration: 0.3 }}
        className="py-3 ps-10 pe-4 rounded-lg text-sm outline-none border out-of-range:border-red-500 w-full"
        type="search"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {isDropdownVisible && (
        <ul className="absolute top-full left-0 right-0 bg-white  rounded-lg mt-1 max-h-52 overflow-y-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  index === selectedIndex ? 'bg-gray-200' : ''
                }`}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbox;
