import React from 'react';

const Notesoncustomer = () => {
  return (
    <div className="mt-5 p-5 bg-white border rounded shadow-sm">
      <h4 className="text-2xl font-bold text-center md:text-start">
        Notes on Customer
      </h4>
      <div className=" mt-5">
        <textarea
          name=""
          id=""
          rows={4}
          className=" py-3 px-4 block w-full rounded-lg text-sm outline-none focus:outline-blue-500  border focus:border-blue-500"
          placeholder="type..."
        ></textarea>
        <button className="bg-gray-100 w-full mt-3 text-sm py-3 rounded-lg border hover:bg-gray-200 text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium">
          Add Note
        </button>
      </div>
      <div className="mt-5 pb-5 border-b border-gray-400 border-dashed">
        <div>
          <p className="text-xs ">
            Customer added product to cart and then forgot to checkout. Later
            knocked the customer support to ask about update on shipping. Later,
            settled on “One day Shipping” though “Free delivery” was preferred.
            Overall good behavior.
          </p>
          <div className="flex justify-end">
            <p className="text-sm text-gray-500">23 Dec, 2019</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pb-5 border-b border-gray-400 border-dashed">
        <div>
          <p className="text-xs ">
            User of this support ticket won a 100% off coupon and received
            top-notch service from the technical support engineer. Along with
            providing a good review, user highly appreciated the team.
          </p>
          <div className="flex justify-end">
            <p className="text-sm text-gray-500">26 Apr, 2019</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pb-5 border-b border-gray-400 border-dashed">
        <div>
          <p className="text-xs ">
            Customer returned and bought 2 related items, which is currently
            being shipped. Customer chose “One day Shipping”. Additional notes
            were added regarding customised wrapping. Customer submitted
            positive review.
          </p>
          <div className="flex justify-end">
            <p className="text-sm text-gray-500">2 Oct, 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notesoncustomer;
