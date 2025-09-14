import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const dropdownAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  const linkAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="px-4 py-2  border hover:bg-gray-200 text-black rounded-md focus:outline-none"
        >
          ...
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              className={`absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg ${
                dropdownPosition === 'top'
                  ? 'bottom-full mb-2'
                  : 'top-full mt-2'
              }`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownAnimation}
            >
              {['View', 'Export', 'Remove'].map((text, index) => (
                <motion.a
                  key={text}
                  href="#!"
                  className={`block px-4 py-2 text-sm ${
                    text === 'Remove'
                      ? 'text-red-600 hover:bg-red-100'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  variants={linkAnimation}
                  custom={index} // Stagger links
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {text}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropdownbutton;
