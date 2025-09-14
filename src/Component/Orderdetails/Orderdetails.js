import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdPrint } from 'react-icons/io';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import Ordertableanddetails from './Ordertableanddetails/Ordertableanddetails';
import Summary from './Summary/Summary';
import Orderstatus from './Ordertableanddetails/Orderstatus/Orderstatus';
import { NavLink } from 'react-router-dom';

const Orderdetails = () => {
  return (
    <div className="container m-auto p-2 mb-20 mt-5">
      <div className="flex gap-2 justify-between items-center flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">
            Order <span>#256</span>
          </h1>
          <p class=" text-lg text-gray-500">
            Customer Id:{' '}
            <span>
              <NavLink
                to="/customerdetails"
                className="decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer
              text-blue-600 hover:text-blue-500 hover:underline"
              >
                #2563214
              </NavLink>
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-blue-700 h-fit flex gap-2 items-center">
            <span>
              <IoMdPrint className="text-2xl" />
            </span>
            Print
          </button>
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-blue-700 h-fit flex gap-2 items-center">
            <span>
              <HiOutlineReceiptRefund className="text-2xl" />
            </span>
            Refund
          </button>
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-rose-700 h-fit flex items-center gap-1">
            <span>
              <MdDeleteForever className="text-2xl" />
            </span>
            Customer Remove
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 lg:col-span-8">
          <Ordertableanddetails></Ordertableanddetails>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Summary></Summary>
          <Orderstatus></Orderstatus>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
