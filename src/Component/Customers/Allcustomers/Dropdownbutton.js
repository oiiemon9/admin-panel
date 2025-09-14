import { useState, useRef, useEffect } from 'react';

const Dropdownbutton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const adjustDropdownPosition = () => {
      if (buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();

        const spaceBelow = window.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;

        if (
          spaceBelow < dropdownRect.height &&
          spaceAbove > dropdownRect.height
        ) {
          setDropdownPosition('top');
        } else {
          setDropdownPosition('bottom');
        }
      }
    };

    if (isOpen) {
      adjustDropdownPosition();
      window.addEventListener('resize', adjustDropdownPosition);
      window.addEventListener('scroll', adjustDropdownPosition);
    }

    return () => {
      window.removeEventListener('resize', adjustDropdownPosition);
      window.removeEventListener('scroll', adjustDropdownPosition);
    };
  }, [isOpen]);
  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        >
          Toggle Dropdown
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className={`absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg ${
              dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            }`}
          >
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View
            </a>
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Export
            </a>
            <div className="border-t border-gray-200"></div>
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              Remove
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdownbutton;
