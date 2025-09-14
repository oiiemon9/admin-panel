import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 z-10 w-80 shadow-lg">
          <h2 className="text-lg font-bold mb-2 dark:text-white">Alert</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{message}</p>
          <button
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200 w-full"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
