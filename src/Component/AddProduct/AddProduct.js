import React from 'react';
import ProductTitle from './ProductTitle/ProductTitle';
import Organize from './Organize/Organize';
import Variants from './Variants/Variants';

const AddProduct = () => {
  return (
    <div className="container m-auto p-2 mb-20">
      <div className="block sm:flex justify-between items-end mt-5">
        <div className="">
          <h1 className="text-3xl font-bold">Add a product</h1>
          <p className="font-semibold text-sm text-gray-500">
            Orders placed across your store
          </p>
        </div>
        <div className="flex gap-2 mt-5 sm:mt-0">
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm h-fit">
            Discard
          </button>
          <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-blue-700 h-fit">
            Save draft
          </button>
          <button className="py-2 px-4 rounded border bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm h-fit">
            Publish product
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-12 lg:col-span-8">
          <ProductTitle></ProductTitle>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Organize></Organize>
          <Variants></Variants>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
