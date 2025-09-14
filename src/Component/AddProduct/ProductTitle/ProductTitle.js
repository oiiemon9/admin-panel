import React from 'react';
import ProductDescription from './ProductDescription';
import DisplayImages from './DisplayImages/DisplayImages';
import Inventory from './Inventory/Inventory';

const ProductTitle = () => {
  return (
    <div className="">
      <div className="">
        <h4 className="text-lg font-semibold">Product Title</h4>
        <div className=" space-y-3 mt-3">
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
            placeholder="Write title here..."
          />
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold">Product Description</h4>
        <ProductDescription></ProductDescription>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold">Display images</h4>
        <DisplayImages></DisplayImages>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold">Inventory</h4>
        <Inventory></Inventory>
      </div>
    </div>
  );
};

export default ProductTitle;
