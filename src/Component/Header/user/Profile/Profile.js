import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CiTimer } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { SlLock } from 'react-icons/sl';
import { CiSettings } from 'react-icons/ci';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const buttonRef = useRef(null); // Reference for the button

  const handleClickOutside = (event) => {
    // Check if the click target is outside the div AND outside the button
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsVisible(false); // Close the div
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);
  return (
    <div>
      <div className="relative">
        <div className=" absolute top-16 -right-2">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                ref={divRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-80 md:w-[295px] h-[480px] border bg-white rounded-xl shadow-md relative z-10"
              >
                <div className="h-10 w-10 bg-white border rotate-45 shadow-md absolute -top-1 right-3 z-[11]"></div>
                <div className="z-30 relative bg-white h-full overflow-y-auto">
                  <div className=" text-center mt-5 mb-5">
                    <div className="avatar">
                      <div className="h-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <h6 className="text-sm font-semibold">Jerry Seinfield</h6>
                  </div>
                  <div className="mx-4">
                    <input
                      type="text"
                      placeholder="Update your status"
                      className="input input-bordered w-full max-w-xs h-8 placeholder:text-sm  focus:outline-blue-400"
                    />
                  </div>
                  <div className="border-b mt-4">
                    <div className="h-40 overflow-y-scroll scroll-smooth custom-scrollbar">
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <FiUser className="text-lg" />
                          Profile
                        </button>
                      </div>
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <MdOutlineSpaceDashboard className="text-lg" />
                          Dashboard
                        </button>
                      </div>
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <SlLock className="text-lg" />
                          Posts & Activity
                        </button>
                      </div>
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <CiSettings className="text-lg" />
                          Settings & Privacy
                        </button>
                      </div>
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <IoIosHelpCircleOutline className="text-lg" />
                          Help Center
                        </button>
                      </div>
                      <div className="">
                        <button className=" w-full flex px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                          <GrLanguage className="text-lg" />
                          Language
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b">
                    <div className="">
                      <button className=" w-full flex my-4 px-4 py-2 text-sm hover:bg-slate-200 gap-2 items-center transition-all duration-300">
                        <FiUserPlus className="text-lg" />
                        Add another account
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <div className="flex">
                        <button className="mx-4 mt-4 w-full bg-gray-50 border rounded transition-all duration-300 hover:bg-slate-200 py-2 text-sm font-semibold flex items-center justify-center gap-2">
                          <IoIosLogOut className="text-lg" />
                          Sign out
                        </button>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <button className="link link-hover text-xs font-medium text-gray-400">
                          Privacy policy
                        </button>
                        .
                        <button className="link link-hover text-xs font-medium text-gray-400">
                          Terms
                        </button>
                        .
                        <button className="link link-hover text-xs font-medium text-gray-400">
                          Cookies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          ref={buttonRef} // Add ref here for proper outside click detection
          type="button"
          className="m-1 ms-0 z-20 relative inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={() => setIsVisible((prev) => !prev)} // Toggle visibility
        >
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 h-10 w-10 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
