import React from 'react';
import Date from './Date';

const Attributes = () => {
  return (
    <div className="mt-3">
      <div className="form-control grid gap-2">
        <label className="cursor-pointer flex items-center gap-2 w-fit">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
          <span className=" text-sm font-medium">Fragile Product</span>
        </label>
        <label className="cursor-pointer flex items-center gap-2 w-fit">
          <input type="checkbox" className="checkbox checkbox-info" />
          <span className=" text-sm font-medium">Biodegradable</span>
        </label>
        <label className="cursor-pointer flex gap-2">
          <input type="checkbox" className="checkbox checkbox-info" />
          <div className="w-full">
            <span className=" text-sm font-medium">Frozen Product</span>
            <div className="space-y-3">
              <input
                type="text"
                className="py-2 px-4 block w-full border-gray-200 rounded-lg text-xs disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300 placeholder-gray-400"
                placeholder="Max. allowed Temperature"
              />
            </div>
          </div>
        </label>
        <label className="cursor-pointer flex gap-2">
          <input type="checkbox" className="checkbox checkbox-info" />
          <div className="w-full">
            <span className="text-sm font-medium">Expiry Date of Product</span>
            <div className="space-y-3">
              <Date></Date>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Attributes;
