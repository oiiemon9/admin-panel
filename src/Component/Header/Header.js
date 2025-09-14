import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import './Header.css';
import Searchbox from './Searchbox/Searchbox';
import User from './user/User';

import { LuPieChart } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { FaAngleUp } from 'react-icons/fa6';
import { GrNotification } from 'react-icons/gr';
import { MdChatBubbleOutline } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebarOnNavLinkClick = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // dropdown

  // Dropdown logic
  const [isEcommerceOpen, setEcommerceOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [isAdmin2Open, setAdmin2Open] = useState(false);

  const location = useLocation();

  // List of paths to keep E-commerce and Admin sections open
  const ecommerceAdminPaths = [
    '/addproduct',
    '/products',
    '/customers',
    '/customerdetails',
    '/orders',
    '/orderdetails',
  ];

  // Check if the current path matches any in the list
  useEffect(() => {
    const isEcommerceOrAdminActive = ecommerceAdminPaths.some((path) =>
      location.pathname.includes(path)
    );
    if (isEcommerceOrAdminActive) {
      setEcommerceOpen(true);
      setAdminOpen(true);
    }
  }, [location.pathname]); // Update on path change
  // List of paths to keep E-commerce and Admin sections open

  const ecommerceAdmin2Paths = ['/addproduct'];
  // Check if the current path matches any in the list
  useEffect(() => {
    const isEcommerceOrAdmin2Active = ecommerceAdmin2Paths.some((path) =>
      location.pathname.includes(path)
    );
    if (isEcommerceOrAdmin2Active) {
      setEcommerceOpen(true);
      setAdmin2Open(true);
    }
  }, [location.pathname]); // Update on path change
  return (
    <div className="lg:ms-64 sticky top-0 z-50">
      {/* Overlay when sidebar is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }} // Start transparent
            animate={{ opacity: 0.5, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Animate to semi-black background
            exit={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }} // Exit animation
            transition={{ duration: 0.5 }} // Smooth transition duration
            className="fixed inset-0 lg:hidden z-[55]" // Overlay visible only on small devices
            onClick={toggleSidebar}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center bg-base-100 border-b">
        <div className=" text-center lg:hidden">
          <button
            className="btn-square btn-ghost"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="navbar justify-between">
          <div className="">
            <button className=" text-xl me-2">daisyUI</button>
          </div>
          <div className="w-full flex justify-center">
            <Searchbox></Searchbox>
          </div>
          <div className="">
            <User></User>
          </div>
        </div>
      </div>
      <div>
        <div
          ref={sidebarRef}
          id="hs-offcanvas-example"
          className={`hs-overlay [--auto-close:lg] transform transition-all duration-300 fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white dark:bg-neutral-800 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:translate-x-0 lg:end-auto lg:bottom-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
          role="dialog"
          tabIndex="-1"
          aria-label="Sidebar"
        >
          <div className="px-6 flex justify-between items-center">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
            {/* close button  */}
            <div className=" flex items-center lg:hidden">
              <motion.button
                whileHover={{ backgroundColor: '#881337' }}
                type="button"
                className=" hover:text-gray-800 dark:text-gray-300 dark:hover:text-white bg-gray-300 p-2 rounded-full"
                aria-label="Close sidebar"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
          <div>
            <ul className="list-none px-6 py-3 rounded-box">
              <li className="">
                <NavLink
                  to="./"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-1 px-3 rounded-lg mb-1  ${
                      isActive
                        ? 'text-blue-500 bg-gray-100'
                        : 'hover:bg-gray-100 '
                    }`
                  }
                  onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                >
                  <LuPieChart className="text-lg" />
                  Dashboard
                </NavLink>
              </li>
              <li className="block lg:hidden">
                <NavLink
                  to="./notifications"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-1 px-3 rounded-lg mb-1 relative  ${
                      isActive
                        ? 'text-blue-500 bg-gray-100'
                        : 'hover:bg-gray-100 '
                    }`
                  }
                  onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                >
                  <GrNotification className="text-lg" />
                  Notifications
                  <span class="flex absolute bottom-50 right-5">
                    <span class="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                    <span class="relative inline-flex text-xs bg-red-500 text-white rounded-full px-0.5">
                      9+
                    </span>
                  </span>
                </NavLink>
              </li>
              <li>
                <div>
                  <div
                    onClick={() => setEcommerceOpen(!isEcommerceOpen)}
                    className="flex justify-between items-center cursor-pointer py-1 px-3 hover:bg-gray-100 rounded-lg mb-1
                    "
                  >
                    <button className="flex items-center gap-2">
                      {' '}
                      <FiShoppingCart className="text-lg" /> E-commerce
                    </button>
                    <span
                      className={`ml-2 transform transition-transform duration-300 ease-out  ${
                        isEcommerceOpen ? '-rotate-180' : ''
                      }`}
                    >
                      <FaAngleUp />
                    </span>
                  </div>

                  <AnimatePresence>
                    {isEcommerceOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }} // or a value that fits your content's height
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="pl-1 overflow-hidden flex"
                      >
                        <div className=" border-l my-4 mx-2"></div>
                        <ul className="w-full">
                          <li>
                            <div>
                              <div
                                onClick={() => setAdminOpen(!isAdminOpen)}
                                className="flex justify-between items-center cursor-pointer py-1 px-3 hover:bg-gray-100 rounded-lg mb-1"
                              >
                                <button> Admin</button>
                                <span
                                  className={`ml-2 transform transition-transform duration-300 ease-out ${
                                    isAdminOpen ? '-rotate-180' : ''
                                  }`}
                                >
                                  <FaAngleUp />
                                </span>
                              </div>
                              <AnimatePresence>
                                {' '}
                                {isAdminOpen && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }} // or a value that fits your content's height
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pl-1 overflow-hidden flex"
                                  >
                                    <div className=" border-l my-4 mx-2"></div>
                                    <ul className="w-full">
                                      <li className="">
                                        <NavLink
                                          to="./addproduct"
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Add product
                                        </NavLink>
                                      </li>
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./products"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Products
                                        </NavLink>
                                      </li>
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./customers"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Customers
                                        </NavLink>
                                      </li>
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./customerdetails"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Customer details
                                        </NavLink>
                                      </li>
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./orders"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Orders
                                        </NavLink>
                                      </li>
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./orderdetails"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Order details
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </li>
                          <li>
                            <div>
                              <div
                                onClick={() => setAdmin2Open(!isAdmin2Open)}
                                className="flex justify-between items-center cursor-pointer py-1 px-3 hover:bg-gray-100 rounded-lg mb-1"
                              >
                                <button>Admin 2</button>
                                <span
                                  className={`ml-2 transform transition-transform duration-300 ease-out ${
                                    isAdmin2Open ? '-rotate-180' : ''
                                  }`}
                                >
                                  <FaAngleUp />
                                </span>
                              </div>
                              <AnimatePresence>
                                {' '}
                                {isAdmin2Open && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }} // or a value that fits your content's height
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pl-1 overflow-hidden flex"
                                  >
                                    <div className=" border-l my-4 mx-2"></div>
                                    <ul className="w-full">
                                      <li className="">
                                        <NavLink
                                          className={({ isActive }) =>
                                            `flex py-1 px-3 rounded-lg mb-1 ${
                                              isActive
                                                ? 'text-blue-500 bg-gray-100'
                                                : 'hover:bg-gray-100'
                                            }`
                                          }
                                          to="./addproduct"
                                          onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                                        >
                                          Add product
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
              <li className="">
                <NavLink
                  to="/people-list"
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-1 px-3 rounded-lg mb-1  ${
                      isActive
                        ? 'text-blue-500 bg-gray-100'
                        : 'hover:bg-gray-100 '
                    }`
                  }
                  onClick={closeSidebarOnNavLinkClick} // Attach the closeSidebar function
                >
                  <MdChatBubbleOutline className="text-lg" />
                  Chat
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
