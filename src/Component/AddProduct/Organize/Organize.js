import React, { useState } from 'react';
import Vendor from './Vendor';
import Collection from './Collection';
import Tags from './Tags';

const Organize = () => {
  const [categories, setCategories] = useState(["Men's Clothing"]);

  const handleAddCategory = () => {
    if (categories.length < 2) {
      setCategories([...categories, '']);
    }
  };

  const handleRemoveCategory = () => {
    if (categories.length > 1) {
      setCategories(categories.slice(0, -1));
    }
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-white px-5 py-3 rounded-xl border">
      <h4 className="text-lg font-semibold">Organize</h4>
      <div className="mt-3 grid gap-2">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm font-semibold">Category</h4>
            {categories.length < 2 ? (
              <button
                onClick={handleAddCategory}
                className="text-blue-600 hover:text-blue-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer text-sm"
              >
                Add new category
              </button>
            ) : (
              <button
                onClick={handleRemoveCategory}
                className="text-red-600 hover:text-red-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer text-sm"
              >
                Remove category
              </button>
            )}
          </div>
        </div>
        {/* Category dropdowns */}
        {categories.map((category, index) => (
          <div key={index} className="w-full">
            <select
              value={category}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
              className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
            >
              <option value="">Select a category</option>
              <option value="Men's Clothing ">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="Kid's Clothing">Kid's Clothing</option>
            </select>
          </div>
        ))}
      </div>
      <div>
        <Vendor></Vendor>
      </div>
      <div>
        <Collection></Collection>
      </div>
      <div>
        <Tags></Tags>
      </div>
    </div>
  );
};

export default Organize;
