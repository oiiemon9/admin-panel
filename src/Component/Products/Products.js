import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AllProducts from './AllProducts/AllProducts';
import Published from './Published/Published';
import Drafts from './Drafts/Drafts';

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

const Products = () => {
  const breadcrumbItems = [
    { label: 'E-commerce', link: '#' },
    { label: 'Admin', link: '#' },
    { label: 'Products', link: null }, // Current page, no link
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="container m-auto p-2 mb-20 mt-5">
      {/* Dynamic Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <div className="block sm:flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center max-w-[500px]">
          <div>
            <button
              onClick={() => setActiveTab('all')}
              className={`  decoration-1  focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
            ${
              activeTab === 'all'
                ? ' text-black font-bold underline'
                : 'text-blue-600 hover:text-blue-500 hover:underline'
            }`}
            >
              All
            </button>
            {''}
            <span className="text-sm text-gray-500">(15552)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('published')}
              className={`  decoration-1  focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
            ${
              activeTab === 'published'
                ? ' text-black font-bold underline'
                : 'text-blue-600 hover:text-blue-500 hover:underline'
            }`}
            >
              Published
            </button>
            {''}
            <span className="text-sm text-gray-500">(12556)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`  decoration-1  focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
            ${
              activeTab === 'drafts'
                ? ' text-black font-bold underline'
                : 'text-blue-600 hover:text-blue-500 hover:underline'
            }`}
            >
              Drafts
            </button>
            {''}
            <span className="text-sm text-gray-500">(20)</span>
          </div>
          <div>
            <button
              onClick={() => setActiveTab('ondiscount')}
              className={`  decoration-1  focus:outline-none focus:underline opacity-90 cursor-pointer text-sm 
            ${
              activeTab === 'ondiscount'
                ? ' text-black font-bold underline'
                : 'text-blue-600 hover:text-blue-500 hover:underline'
            }`}
            >
              On discount
            </button>
            {''}
            <span className="text-sm text-gray-500">(501)</span>
          </div>
        </div>
      </div>
      <div>
        {activeTab === 'all' && (
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AllProducts></AllProducts>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'published' && (
          <motion.div
            key="published"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Published></Published>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'drafts' && (
          <motion.div
            key="drafts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Drafts></Drafts>
          </motion.div>
        )}
      </div>
      <div>
        {activeTab === 'ondiscount' && (
          <motion.div
            key="ondiscount"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            fuga debitis obcaecati asperiores dolor reprehenderit natus
            corrupti, corporis, quibusdam itaque vero amet. Voluptatum veritatis
            autem ipsa mollitia, nostrum voluptates tenetur doloremque molestiae
            doloribus est eveniet dolores iste sapiente dolore necessitatibus
            illum? Non et, deserunt ullam voluptatibus harum, labore hic
            blanditiis quisquam iure voluptate architecto, sapiente odit dolore
            accusantium odio iste tenetur consequuntur architecto ut? Nobis
            incidunt fugit voluptates optio esse reiciendis cupiditate quia
            consequuntur molestiae consequatur est ullam reprehenderit excepturi
            officiis vel perferendis quo maiores sint, a sunt molestias!
            Voluptas, cupiditate eveniet sunt autem possimus maxime neque
            ducimus facere asperiores, exercitationem ad odio dicta magni ab ut
            omnis labore ipsum dolore dolorum nemo error? Iusto, ex voluptatem
            ea quo eius quis sunt nesciunt a incidunt similique vitae quam
            maiores id culpa saepe eaque qui quas odit hic. Aliquam itaque vitae
            ad nesciunt quod delectus, doloremque excepturi suscipit dolores
            ipsa. Alias iste quisquam molestias praesentium, molestiae veritatis
            officiis necessitatibus ex sequi reiciendis aliquam consequuntur
            magnam consectetur accusamus magni id? Error dolores neque expedita
            voluptatem quisquam magni ducimus modi non iste perspiciatis hic in,
            facere et corrupti nihil reprehenderit delectus nesciunt quam
            sapiente explicabo a aliquam. Quisquam provident culpa temporibus
            nulla, cum, laboriosam fugit incidunt adipisci porro expedita libero
            facere, distinctio pariatur!
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
