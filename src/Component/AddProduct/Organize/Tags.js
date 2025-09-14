import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const TagSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Bangladesh', label: 'Bangoli' },
    { value: 'Bangladesh', label: 'Bangoli' },
    { value: 'Bangladesh', label: 'Bangoli' },
    { value: 'Bangladesh', label: 'Bangoli' },
    { value: 'Bangladesh', label: 'Bangoli' },
    { value: 'Bangladesh', label: 'Bangoli' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '0.5rem',
      boxShadow: state.isFocused ? '0px 0px 1px 2px #4299e1' : '',
      '&:hover': {
        borderColor: '#3B82F6',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9CA3AF', // Adjust the placeholder color
      fontStyle: 'italic',
      fontSize: '0.875rem', // Small font size (sm)
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'transparent', // transparent background
      color: '#374151', // gray-700
      borderRadius: '1rem',
      border: '1px solid gainsboro',
      overflow: 'hidden', // correct spelling
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#374151', // gray-700
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#374151', // gray-700
      padding: '2px', // remove any padding
      margin: '0', // remove any margin
      marginRight: '8px',
      marginTop: '5px',
      height: '18px', // set height
      width: '18px', // set width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5px',
      borderRadius: '20px',
      border: '1px solid gainsboro',
      '&:hover': {
        backgroundColor: '#881337', // black background on hover
        color: '#ffffff', // white color for contrast on hover
      },
    }),
  };
  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="mt-3">
      <div className=" grid gap-2">
        <div>
          <h4 className="text-sm font-semibold">Tags</h4>
        </div>
        <div className="w-full">
          <CreatableSelect
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Select tag..."
            className="tag-selector"
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default TagSelector;
