import React, { useState } from 'react';

const Shipping = () => {
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
            <h6>Fullfilled by Seller</h6>
            <p className="text-xs">
              You’ll be responsible for product delivery. <br /> Any damage or
              delay during shipping may cost you a Damage fee.
            </p>
          </div>
        </label>
        <label className="cursor-pointer flex items-center gap-2 mt-5">
          <input
            type="checkbox"
            checked={selectedCheckbox === 'checkbox2'}
            onChange={() => handleCheckboxChange('checkbox2')}
            className="checkbox checkbox-info"
          />
          <div>
            <h6>
              Fullfilled by Emon{' '}
              <span className="badge fs-10 ms-2 bg-rose-100 text-red-500 border border-red-500">
                Recommended
              </span>
            </h6>
            <p className="text-xs">
              Your product, Our responsibility. <br /> For a measly fee, we will
              handle the delivery process for you.
            </p>
          </div>
        </label>
      </div>
      <div className="mt-2">
        <p className="text-xs">
          See our{' '}
          <span className="text-blue-600 hover:text-blue-500 decoration-1 hover:underline focus:outline-none focus:underline opacity-90 cursor-pointer">
            Delivery terms and conditions
          </span>{' '}
          for details.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
