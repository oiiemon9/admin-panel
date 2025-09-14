import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const Orderstatus = () => {
  return (
    <div className="mt-8">
      <div className="bg-white px-5 py-3 rounded-xl border">
        <h4 className="text-lg font-semibold">Order Status</h4>
        <div className="mt-3 grid gap-2">
          <div className="grid gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">Payment status </h4>
              </div>
              <select className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300 mt-2 ">
                <option>Paid</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-3 grid gap-2">
          <div className="grid gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">Order Status</h4>
              </div>
              <select className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300 mt-2 ">
                <option>Processing</option>
                <option>Confirmed</option>
                <option>Shipped</option>
                <option>In Transit</option>
                <option>Out For Delivery</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-gray-100 w-full mt-3 text-sm py-3 rounded-lg border hover:bg-gray-200 text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orderstatus;
