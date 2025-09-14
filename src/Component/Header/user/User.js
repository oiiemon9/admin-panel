import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './User.css';
import { CiTimer } from 'react-icons/ci';
import { GrNotification } from 'react-icons/gr';
import Profile from './Profile/Profile';
const User = () => {
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

  const notifications = [
    {
      id: 1,
      name: 'Jessie Samson',
      description: '📅Created an event.',
      time: '10:58 AM',
      date: 'August 19,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/30.webp',
    },
    {
      id: 2,
      name: 'Jane Foster',
      description: '💬Mentioned you in a comment.',
      time: '10:20 AM ',
      date: 'August 7,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/avatar.webp',
    },
    {
      id: 3,
      name: 'Kiera Anderson',
      description: '👤Tagged you in a comment.',
      time: '9:11 AM ',
      date: 'August 8,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
    },
    {
      id: 1,
      name: 'Jessie Samson',
      description: '📅Created an event.',
      time: '10:58 AM',
      date: 'August 19,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/30.webp',
    },
    {
      id: 2,
      name: 'Jane Foster',
      description: '💬Mentioned you in a comment.',
      time: '10:20 AM ',
      date: 'August 7,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/avatar.webp',
    },
    {
      id: 3,
      name: 'Kiera Anderson',
      description: '👤Tagged you in a comment.',
      time: '9:11 AM ',
      date: 'August 8,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
    },
    {
      id: 4,
      name: 'Jessie Samson',
      description: '📅Created an event.',
      time: '10:58 AM',
      date: 'August 19,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/30.webp',
    },
    {
      id: 5,
      name: 'Jane Foster',
      description: '💬Mentioned you in a comment.',
      time: '10:20 AM ',
      date: 'August 7,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/avatar.webp',
    },
    {
      id: 6,
      name: 'Kiera Anderson',
      description: '👤Tagged you in a comment.',
      time: '9:11 AM ',
      date: 'August 8,2021',
      image:
        'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
    },
  ];

  return (
    <div className=" flex items-center gap-2 me-2 sm:me-5">
      <div className="hidden sm:block">
        <label className="swap swap-rotate hover:bg-gray-50 p-2 rounded-full">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="relative hidden lg:block">
        <div className=" absolute top-[60px] -right-2">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                ref={divRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-80 md:w-[360px] h-[450px] border bg-white rounded-xl shadow-md relative z-10"
              >
                <div className="h-10 w-10 bg-white border rotate-45 shadow-md absolute -top-1 right-3 z-[11]"></div>
                <div className="z-30 relative bg-white h-full overflow-y-auto custom-scrollbar">
                  <div className="sticky top-0 bg-white px-3 py-1 flex justify-between border-b z-10">
                    <h4 className="text-sm font-semibold">Notifications</h4>
                    <button
                      className="text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600"
                      type="button"
                    >
                      Mark all as read
                    </button>
                  </div>
                  <div className="grid gap-1">
                    {notifications.map((notification) => (
                      <motion.div
                        initial={{ backgroundColor: '#ffffff' }}
                        whileHover={{ backgroundColor: '#f3f4f6' }}
                        key={notification.id}
                        className=" border-b  p-2 flex gap-1 items-center "
                      >
                        <div>
                          <div className=" avatar online z-[1] ">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              <img
                                className="h-full w-full object-cover"
                                src={notification.image}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="max-w-60 w-full">
                          <h6 className="text-sm font-semibold">
                            {notification.name}
                          </h6>
                          <div className="flex items-center gap-1">
                            <p className="text-sm ">
                              {notification.description}
                            </p>
                            <p className="text-xs text-gray-400">10am</p>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm font-bold text-gray-600 flex items-center gap-1">
                              <CiTimer />
                              {notification.time}
                              <span className="text-xs text-gray-500">
                                {notification.date}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <button className="btn text-center p-2 sm:p-3">
                            ...
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          ref={buttonRef}
          type="button"
          className=" m-1 ms-0 z-20 relative py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-white text-gray-800  hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={() => setIsVisible((prev) => !prev)} // Toggle visibility
        >
          <GrNotification className="text-xl" />
          <span className="flex absolute top-0 end-0 -mt-2 -me-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
            <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
              9+
            </span>
          </span>
        </button>
      </div>
      {/* Profile  */}
      <section>
        <Profile></Profile>
      </section>
    </div>
  );
};

export default User;
