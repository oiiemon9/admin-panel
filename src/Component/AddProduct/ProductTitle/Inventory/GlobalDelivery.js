import React, { useState } from 'react';
import Select from 'react-select';

const GlobalDelivery = () => {
  const countries = [
    { value: 'mexico', label: 'Mexico' },
    { value: 'canada', label: 'Canada' },
    { value: 'united_kingdom', label: 'United Kingdom' },
    { value: 'united_states', label: 'United States of America' },
    { value: 'bangladesh', label: 'bangoli' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: '#3B82F6', // blue-500
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
  // Initialize selectedCheckbox with 'checkbox1' to check it by default
  const [selectedCheckbox, setSelectedCheckbox] = useState('checkbox1');

  const handleCheckboxChange = (checkbox) => {
    setSelectedCheckbox(checkbox);
  };

  return (
    <div className="mt-3">
      <div className="form-control">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedCheckbox === 'checkbox1'}
            onChange={() => handleCheckboxChange('checkbox1')}
            className="checkbox checkbox-info"
          />
          <div>
            <h6>Worldwide delivery</h6>
            <p className="text-xs">
              Only available with Shipping method:{' '}
              <span className="text-blue-600 hover:text-blue-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer">
                Fullfilled by Emon
              </span>
            </p>
          </div>
        </label>
        <div
          className="cursor-pointer flex items-center gap-2  mt-5"
          onFocus={() => handleCheckboxChange('checkbox2')}
          tabIndex={0}
        >
          <input
            type="checkbox"
            checked={selectedCheckbox === 'checkbox2'}
            onChange={() => handleCheckboxChange('checkbox2')}
            className="checkbox checkbox-info"
          />
          <div className="w-full">
            <h6> Selected Countries</h6>
            <Select
              isMulti
              options={countries}
              placeholder="Type Country name..."
              styles={customStyles}
            />
          </div>
        </div>
        <label className="cursor-pointer flex items-center gap-2 mt-5">
          <input
            type="checkbox"
            checked={selectedCheckbox === 'checkbox3'}
            onChange={() => handleCheckboxChange('checkbox3')}
            className="checkbox checkbox-info"
          />
          <div>
            <h6>Local delivery</h6>
            <p className="text-xs">
              Deliver to your country of residence {''}
              <span className="text-blue-600 hover:text-blue-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer">
                Fullfilled by Emon
              </span>
            </p>
          </div>
        </label>
      </div>
      {/* <div className="w-full max-w-md mx-auto mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Selected Countries
        </label>
        <Select
          isMulti
          options={countries}
          placeholder="Type Country name"
          styles={customStyles}
        />
      </div> */}
    </div>
  );
};

export default GlobalDelivery;
