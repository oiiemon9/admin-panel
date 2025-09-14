import React from 'react';

const Collection = () => {
  return (
    <div className="mt-3">
      <div className=" grid gap-2">
        <div>
          <h4 className="text-sm font-semibold">Collection</h4>
        </div>
        <div className="w-full">
          <div className=" space-y-3">
            <input
              type="text"
              className="py-2 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
              placeholder="Collection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
