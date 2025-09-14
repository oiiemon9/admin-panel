import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Notesoncustomer from './NotesonCustomer/Notesoncustomer';
import Customerorders from './Customerorders/Customerorders';
import Customerwishlist from './Customerwishlist/Customerwishlist';
import Ratingsandreviews from './Ratingsandreviews/Ratingsandreviews';
import Textcopy from './Textcopy/Textcopy';

const Customerdetails = () => {
  return (
    <div className="container m-auto p-2 mb-20 mt-5">
      <div className="flex gap-2 justify-between items-center flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Customer Details</h1>
        </div>
        <div>
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-rose-700 h-fit flex items-center gap-1">
            <span>
              <MdDeleteForever className="text-2xl" />
            </span>
            Customer Remove
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-7 bg-white  border rounded p-5 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col md:flex-row  justify-center items-center gap-5">
              <div className="rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="h-40 w-40 object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-center md:text-start">
                  Ansolo Lazinatov
                </h4>
                <p className="text-sm text-center md:text-start">
                  Joined 3 months ago
                </p>
                <Textcopy></Textcopy>
                <div className="flex justify-center md:justify-start gap-2 mt-2 ">
                  <button>
                    <FaLinkedinIn className="text-gray-500 hover:text-gray-900 transition-all duration-300" />
                  </button>
                  <button>
                    <FaFacebook className="text-gray-500 hover:text-gray-900 transition-all duration-300" />
                  </button>
                  <button>
                    <FaTwitter className="text-gray-500 hover:text-gray-900 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-gray-400 border-dashed">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-black">Orders</p>
                  <p className="text-xl text-gray-500">97</p>
                </div>
                <div>
                  <p className="text-sm text-black">Wishlist</p>
                  <p className="text-xl text-gray-500">43</p>
                </div>
                <div>
                  <p className="text-sm text-black">Ratings & reviews</p>
                  <p className="text-xl text-gray-500">30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 bg-white border rounded p-5 shadow-sm">
            <h4 className="text-2xl font-bold text-center md:text-start">
              Default Address
            </h4>
            <div className="mt-5">
              <h6 className="text-gray-700 font-bold">Address</h6>
              <p className="text-sm text-gray-500">Shatinon Mekalan</p>
              <p className="text-sm text-gray-500">
                Vancouver, British Columbia
              </p>
              <p className="text-sm text-gray-500">Canada</p>
            </div>
            <div className="mt-5">
              <h6 className="text-gray-700 font-bold">Email</h6>

              <a
                href={`mailto:`}
                className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left"
              >
                shatinon@jeemail.com
              </a>
            </div>
            <div className="mt-5">
              <h6 className="text-gray-700 font-bold">Phone</h6>
              <p className="text-sm text-gray-500">+1234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Notesoncustomer></Notesoncustomer>
      </div>
      <div>
        <Customerorders></Customerorders>
      </div>
      <div>
        <Customerwishlist></Customerwishlist>
      </div>
      <div>
        <Ratingsandreviews></Ratingsandreviews>
      </div>
    </div>
  );
};

export default Customerdetails;
