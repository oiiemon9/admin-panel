import React, { useState } from 'react';

const Vendor = () => {
  const [vendors, setVendors] = useState(["Men's Clothing"]);

  const handleAddVendor = () => {
    if (vendors.length < 2) {
      setVendors([...vendors, '']);
    }
  };

  const handleRemoveVendor = () => {
    if (vendors.length > 1) {
      setVendors(vendors.slice(0, -1));
    }
  };

  const handleVendorChange = (index, value) => {
    const updatedVendors = [...vendors];
    updatedVendors[index] = value;
    setVendors(updatedVendors);
  };

  return (
    <div className="mt-3">
      <div className="grid gap-2">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm font-semibold">Vendor</h4>
            {vendors.length < 2 ? (
              <button
                onClick={handleAddVendor}
                className="text-blue-600 hover:text-blue-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer text-sm"
              >
                Add new vendor
              </button>
            ) : (
              <button
                onClick={handleRemoveVendor}
                className="text-red-600 hover:text-red-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer text-sm"
              >
                Remove vendor
              </button>
            )}
          </div>
        </div>
        {/* Vendor dropdowns */}
        {vendors.map((vendor, index) => (
          <div key={index} className="w-full">
            <select
              value={vendor}
              onChange={(e) => handleVendorChange(index, e.target.value)}
              className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300"
            >
              <option value="">Select a vendor</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="Kid's Clothing">Kid's Clothing</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
