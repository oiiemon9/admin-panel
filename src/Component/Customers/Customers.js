import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Allcustomers from './Allcustomers/Allcustomers';
import Newcustomers from './Newcustomers/Newcustomers';
import Abandonedcheckouts from './Abandonedcheckouts/Abandonedcheckouts';

// Breadcrumb component
const Breadcrumb = ({ items }) => {
  return (
    <ol className="flex items-center whitespace-nowrap">
      {items.map((item, index) => (
        <li key={index} className="inline-flex items-center">
          {item.link ? (
            <a
              href={item.link}
              className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              {item.label}
            </a>
          ) : (
            <span
              className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
              aria-current="page"
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <svg
              className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};

const Customers = () => {
  const breadcrumbItems = [
    { label: 'E-commerce', link: '#' },
    { label: 'Admin', link: '#' },
    { label: 'Customers', link: null }, // Current page, no link
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="container m-auto p-2 mb-20 mt-5">
      {/* Dynamic Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <div className="block sm:flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Customers</h1>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-5 items-center ">
          <div>
            <button
              onClick={() => setActiveTab('all')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'all'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              All
            </button>
            <span className="text-sm text-gray-500">(15552)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('New')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'New'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              New
            </button>
            <span className="text-sm text-gray-500">(12556)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('abandonedcheckouts')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'abandonedcheckouts'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              Abandoned checkouts
            </button>
            <span className="text-sm text-gray-500">(12556)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('locals')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'locals'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              Locals
            </button>
            <span className="text-sm text-gray-500">(12556)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('emailsubscribers')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'emailsubscribers'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              Email subscribers
            </button>
            <span className="text-sm text-gray-500">(12556)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('topreviews')}
              className={`decoration-1 focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
                ${
                  activeTab === 'topreviews'
                    ? ' text-black font-bold underline'
                    : 'text-blue-600 hover:text-blue-500 hover:underline'
                }`}
            >
              Top reviews
            </button>
            <span className="text-sm text-gray-500">(20)</span>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'all' && (
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Allcustomers></Allcustomers>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'New' && (
          <motion.div
            key="New"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Newcustomers></Newcustomers>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'abandonedcheckouts' && (
          <motion.div
            key="abandonedcheckouts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Abandonedcheckouts></Abandonedcheckouts>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'locals' && (
          <motion.div
            key="locals"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5">
              fdggfjghjgfh fghgfj gfj Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nemo accusamus inventore nesciunt culpa vel
              autem facilis doloremque. Voluptatum sint fugiat tempora, ea
              possimus mollitia dolore dolorem esse necessitatibus saepe quasi!
            </div>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'emailsubscribers' && (
          <motion.div
            key="emailsubscribers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5">
              fdggfjghjgfh fghgfj gfj Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nemo accusamus inventore nesciunt culpa vel
              autem facilis doloremque. Voluptatum sint fugiat tempora, ea
              possimus mollitia dolore dolorem esse necessitatibus saepe
              quasi!lorem40 Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur harum voluptatum similique. Nam odit assumenda
              delectus consequatur consectetur nesciunt totam repellendus
              officia, aliquid ratione necessitatibus ab, eos quis. Minus vitae
              itaque beatae officia laboriosam ipsa ipsam sequi, architecto
              ullam ut iste qui vel quisquam iusto excepturi magni voluptatum
              voluptatibus neque. Vero placeat autem nemo, nihil voluptatibus
              fugiat quibusdam sunt veniam aspernatur repellat perferendis!
              Ipsam officiis neque, et minus assumenda accusantium ducimus
              cumque veniam laudantium a autem molestias commodi aliquam
              quaerat?
            </div>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'topreviews' && (
          <motion.div
            key="topreviews"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              fuga debitis obcaecati asperiores dolor reprehenderit natus
              corrupti, corporis, quibusdam itaque vero amet.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Customers;
