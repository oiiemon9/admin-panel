import React from 'react';

const Advanced = () => {
  return (
    <div className="mt-3 flex gap-2">
      <div className="w-full">
        <span className=" text-sm font-medium">Product ID Type</span>

        <select className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300">
          <option>ISBN</option>
          <option selected>UPC</option>
          <option>EAN</option>
          <option>JAN</option>
          <option>BDT</option>
        </select>
      </div>
      <div className="w-full">
        <span className=" text-sm font-medium">Product ID</span>
        <div className=" space-y-3">
          <input
            type="text"
            className="py-2 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
            placeholder="ISBN Number"
          />
        </div>
      </div>
    </div>
  );
};

export default Advanced;
