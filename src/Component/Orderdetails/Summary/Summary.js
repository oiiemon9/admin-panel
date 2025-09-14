import React from 'react';

const Summary = () => {
  return (
    <div className="bg-white px-5 py-3 rounded-xl border">
      <h4 className="text-lg font-semibold">Summary</h4>
      <div className="mt-3 pb-3 border-b border-gray-500 border-dashed">
        <div className="grid gap-3">
          <div className="flex justify-between items-center">
            <p>Items subtotal :</p>
            <p className="text-lg">$691</p>
          </div>
        </div>
        <div className="mt-3 grid gap-3">
          <div className="flex justify-between items-center">
            <p>Discount :</p>
            <p className="text-lg">-$59</p>
          </div>
        </div>
        <div className="mt-3 grid gap-3">
          <div className="flex justify-between items-center">
            <p>Tax :</p>
            <p className="text-lg">$126.20</p>
          </div>
        </div>
        <div className="mt-3 grid gap-3">
          <div className="flex justify-between items-center">
            <p>Subtotal :</p>
            <p className="text-lg">$665</p>
          </div>
        </div>
        <div className="mt-3 grid gap-3">
          <div className="flex justify-between items-center">
            <p>Shipping Cost :</p>
            <p className="text-lg">$30</p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-center py-3
      "
      >
        <h4 className="text-xl font-semibold">Total :</h4>
        <p className="text-xl font-semibold">$695.20</p>
      </div>
    </div>
  );
};

export default Summary;
