import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const Variants = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [variants, setVariants] = useState(['Select a variant']); // Start with the default option

  // Define specific options for each variant type
  const variantOptions = {
    color: [
      { value: 'Red', label: 'Red' },
      { value: 'Blue', label: 'Blue' },
      { value: 'Green', label: 'Green' },
      { value: 'Yellow', label: 'Yellow' },
      { value: 'Orange', label: 'Orange' },
      { value: 'Purple', label: 'Purple' },
      { value: 'Pink', label: 'Pink' },
      { value: 'Brown', label: 'Brown' },
      { value: 'Gray', label: 'Gray' },
      { value: 'Black', label: 'Black' },
      { value: 'White', label: 'White' },
      { value: 'Cyan', label: 'Cyan' },
      { value: 'Magenta', label: 'Magenta' },
      { value: 'Lime', label: 'Lime' },
      { value: 'Teal', label: 'Teal' },
      { value: 'Navy', label: 'Navy' },
      { value: 'Maroon', label: 'Maroon' },
      { value: 'Olive', label: 'Olive' },
      { value: 'Coral', label: 'Coral' },
      { value: 'Salmon', label: 'Salmon' },
      { value: 'Gold', label: 'Gold' },
      { value: 'Silver', label: 'Silver' },
      { value: 'Lavender', label: 'Lavender' },
      { value: 'Indigo', label: 'Indigo' },
    ],
    size: [
      { value: 'Small', label: 'Small' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Large', label: 'Large' },
      { value: 'Extra Small', label: 'Extra Small' },
      { value: 'Extra Large', label: 'Extra Large' },
      { value: 'XXL', label: 'XXL' },
      { value: 'XS', label: 'XS' },
      { value: 'XL', label: 'XL' },
      { value: 'One Size', label: 'One Size' },
      { value: 'Petite', label: 'Petite' },
      { value: 'Tall', label: 'Tall' },
      { value: 'Plus Size', label: 'Plus Size' },
    ],
    weight: [
      { value: 'Light', label: 'Light' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Heavy', label: 'Heavy' },
    ],
    smell: [
      { value: 'Floral', label: 'Floral' },
      { value: 'Citrus', label: 'Citrus' },
      { value: 'Woody', label: 'Woody' },
    ],
  };

  const handleAddVariant = () => {
    if (variants.length < 4) {
      setVariants([...variants, 'Select a variant']); // Add new variant with the default option
    }
  };

  const handleRemoveVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
    setSelectedOptions((prev) => {
      const newOptions = { ...prev };
      delete newOptions[index];
      return newOptions;
    });
  };

  const handleVariantChange = (index, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index] = value;
    setVariants(updatedVariants);
    setSelectedOptions((prev) => ({ ...prev, [index]: [] })); // Reset options for this index
  };

  const handleOptionChange = (index, options) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: options }));
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '5rem',
      display: 'flex',
      alignItems: 'flex-start', // Aligns content to the top
      boxShadow: state.isFocused ? '0px 0px 1px 2px #4299e1' : '',
      '&:hover': {
        borderColor: '#3B82F6',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      display: 'none',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      color: '#374151',
      borderRadius: '1rem',
      border: '1px solid gainsboro',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#374151',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#374151',
      padding: '2px',
      marginRight: '8px',
      marginTop: '5px',
      height: '18px',
      width: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5px',
      borderRadius: '20px',
      border: '1px solid gainsboro',
      '&:hover': {
        backgroundColor: '#881337',
        color: '#ffffff',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none', // Hide the dropdown indicator
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
  };

  return (
    <div className="mt-8">
      <div className="bg-white px-5 py-3 rounded-xl border">
        <h4 className="text-lg font-semibold">Variants</h4>
        <div className="mt-3 grid gap-2">
          <div className="grid gap-2">
            {variants.map((variant, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold">Option {index + 1}</h4>
                  {variants.length > 1 && (
                    <button
                      onClick={() => handleRemoveVariant(index)}
                      className="text-red-600 hover:text-red-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <select
                  value={variant}
                  onChange={(e) => handleVariantChange(index, e.target.value)}
                  className="w-full focus:outline-none py-2 px-4 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 outline-none border focus:shadow-[0px_0px_1px_2px_#4299e1] transition-all duration-300 mt-2 "
                >
                  <option value="" className="text-slate-500">
                    Select a variant
                  </option>
                  <option value="size">Size</option>
                  <option value="color">Color</option>
                  <option value="weight">Weight</option>
                  <option value="smell">Smell</option>
                </select>
                {/* Show CreatableSelect only if a valid variant is selected */}
                {variant && variant !== 'Select a variant' && (
                  <div className="w-full mt-2">
                    <CreatableSelect
                      isMulti
                      options={variantOptions[variant] || []} // Show options based on variant
                      value={selectedOptions[index] || []}
                      onChange={(options) => handleOptionChange(index, options)}
                      placeholder="Select tag..."
                      className="tag-selector"
                      styles={customStyles}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          {variants.length < 4 && (
            <button
              onClick={handleAddVariant}
              className="bg-gray-100 w-full mt-3 text-sm py-3 rounded-lg border hover:bg-gray-200 text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium"
            >
              Add Another Option
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Variants;
