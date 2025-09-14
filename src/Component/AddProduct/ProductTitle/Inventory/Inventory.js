import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPricetagOutline } from 'react-icons/io5';
import { FiBox } from 'react-icons/fi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoFilter } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';
import { IoMdCheckmark } from 'react-icons/io';
import './Inventory.css';
import Shipping from './Shipping';
import GlobalDelivery from './GlobalDelivery';
import Attributes from './Attributes';
import Advanced from './Advanced';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('Pricing');

  // Function to get the left position based on the active tab
  const getBoxPosition = () => {
    switch (activeTab) {
      case 'Restock':
        return '62px';
      case 'Shipping':
        return '112px';
      case 'Global Delivery':
        return '160px';
      case 'Attributes':
        return '210px';
      case 'Advanced':
        return '260px';
      default:
        return '14px'; // Pricing
    }
  };

  return (
    <div className="grid grid-cols-12 border-t border-b mt-3 border-gray-400">
      <div className="col-span-4 relative overflow-hidden">
        {/* Animated box */}
        <motion.div
          className="h-5 w-5 border border-gray-400 absolute rotate-45 bg-[#f5f7fa]"
          initial={{ right: '-10px' }} // Initial position
          animate={{ top: getBoxPosition() }} // Animate to the active tab's position
          transition={{ duration: 0.3 }} // Transition duration
        />
        {/* Box end */}
        <div className="border-e border-gray-400 h-full">
          <div className="grid">
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Pricing'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Pricing')}
            >
              <IoPricetagOutline className="text-base" />
              Pricing
            </button>
            <div className="flex items-center before:border-t after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 w-full"></div>
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Restock'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Restock')}
            >
              <FiBox className="text-base" />
              Restock
            </button>
            <div className="flex items-center before:border-t after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 w-full"></div>
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Shipping'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Shipping')}
            >
              <LiaShippingFastSolid className="text-base" />
              Shipping
            </button>
            <div className="flex items-center before:border-t after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 w-full"></div>
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Global Delivery'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Global Delivery')}
            >
              <AiOutlineGlobal className="text-base" />
              Global Delivery
            </button>
            <div className="flex ps-2 before:border-t after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 w-full"></div>
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Attributes'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Attributes')}
            >
              <IoFilter className="text-base" />
              Attributes
            </button>
            <div className="flex items-center before:border-t after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600 w-full"></div>
            <button
              className={`flex ps-2 items-center gap-2 text-xs sm:text-sm h-12 ${
                activeTab === 'Advanced'
                  ? 'text-black font-bold'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Advanced')}
            >
              <CiLock className="text-base" />
              Advanced
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-8 pt-5 ps-5">
        {activeTab === 'Pricing' && (
          <motion.div
            key="pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2">
              <div className="">
                <h4 className=" font-semibold">Regular price</h4>
                <div className=" space-y-3 ">
                  <input
                    type="text"
                    className="py-2 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
                    placeholder="$$$..."
                  />
                </div>
              </div>
              <div className="">
                <h4 className=" font-semibold">Sale price</h4>
                <div className=" space-y-3">
                  <input
                    type="text"
                    className="py-2 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
                    placeholder="$$$..."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === 'Restock' && (
          <motion.div
            key="Restock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="">
              <div className="">
                <h4 className=" font-semibold">Add to Stock</h4>
                <div className=" flex gap-2">
                  <input
                    type="number"
                    className="py-2 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
                    defaultValue={0}
                    min={0} // Prevents input from going below 0
                  />
                  <button className="py-2 px-4 flex items-center gap-1 rounded border bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm h-fit">
                    <IoMdCheckmark />
                    Confirm
                  </button>
                </div>
              </div>
              <div className="flex gap-4 mt-5 ">
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      {/* row 1 */}
                      <tr className="">
                        <td className=" p-0">
                          <h6 className="text-base font-medium">
                            Product in stock now
                          </h6>
                        </td>
                        <td className=" p-0 text-base font-medium">:</td>
                        <td className="e p-0 ps-2">
                          <p className="text-base text-gray-600 font-medium">
                            $1,090
                          </p>
                        </td>
                      </tr>
                      <tr className="">
                        <td className=" p-0">
                          <h6 className="text-base font-medium">
                            Product in transit
                          </h6>
                        </td>
                        <td className=" p-0 text-base font-medium">:</td>
                        <td className=" p-0 ps-2">
                          <p className="text-base text-gray-600 font-medium">
                            5000
                          </p>
                        </td>
                      </tr>
                      <tr className="">
                        <td className=" p-0">
                          <h6 className="text-base font-medium">
                            Last time restocked
                          </h6>
                        </td>
                        <td className=" p-0 text-base font-medium">:</td>
                        <td className=" p-0 ps-2">
                          <p className="text-base text-gray-600 font-medium">
                            30th June, 2021
                          </p>
                        </td>
                      </tr>
                      <tr className="">
                        <td className=" p-0">
                          <h6 className="text-base font-medium">
                            Total stock over lifetime
                          </h6>
                        </td>
                        <td className=" p-0 text-base font-medium">:</td>
                        <td className=" p-0 ps-2">
                          <p className="text-base text-gray-600 font-medium">
                            20,000
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === 'Shipping' && (
          <motion.div
            key="shipping"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold">Shipping Type</h4>
            <Shipping />
          </motion.div>
        )}
        {activeTab === 'Global Delivery' && (
          <motion.div
            key="globalDelivery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold">Global Delivery</h4>
            <GlobalDelivery></GlobalDelivery>
          </motion.div>
        )}
        {activeTab === 'Attributes' && (
          <motion.div
            key="attributes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold">Attributes</h4>
            <Attributes></Attributes>
          </motion.div>
        )}
        {activeTab === 'Advanced' && (
          <motion.div
            key="advanced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold">Advanced</h4>
            <Advanced></Advanced>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
