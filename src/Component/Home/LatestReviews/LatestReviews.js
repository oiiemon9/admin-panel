import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';

import { IoMdCheckmark } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaReply } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';

const LatestReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 6;

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}
        >
          <FaStar />
        </span>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  // Define the columns and data for the table
  const columns = useMemo(
    () => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <input
            type="checkbox"
            {...getToggleAllRowsSelectedProps()}
            className="form-checkbox h-4 w-4"
          />
        ),
        Cell: ({ row }) => (
          <input
            type="checkbox"
            {...row.getToggleRowSelectedProps()}
            className="form-checkbox h-4 w-4"
          />
        ),
      },
      {
        Header: 'PRODUCT',
        accessor: 'product',
        Cell: ({ row: { original } }) => {
          const { product, productimg } = original;

          return (
            <div className="flex gap-2">
              <div className="border rounded w-16 h-16">
                <img
                  className="h-full w-full object-cover"
                  src={productimg}
                  alt={product}
                />
              </div>
              <button
                title={product}
                className="max-w-52 truncate text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600"
              >
                {product}
              </button>
            </div>
          );
        },
      },
      {
        Header: 'CUSTOMER',
        accessor: 'customer',
        Cell: ({ row: { original } }) => {
          const { customer, imglink } = original; // Get customer name and image link from the data

          return (
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden h-10 w-10">
                <img
                  className="h-full w-full object-cover"
                  src={imglink}
                  alt={customer}
                />
              </div>
              <div>
                <button className="text-black hover:underline hover:decoration-black focus:outline-none focus:underline focus:decoration-blue-600">
                  {customer}
                </button>
              </div>
            </div>
          );
        },
      },
      {
        Header: 'RATING',
        accessor: 'rating',
        Cell: ({ value }) => {
          return (
            <div className="flex gap-2 items-center">
              <div>{renderStars(value)}</div>
              <p className="text-gray-500">({value}.00)</p>
            </div>
          );
        },
      },
      {
        Header: 'REVIEW',
        accessor: 'review',
        Cell: ({ value }) => {
          // State to manage the visibility of full review
          const [showFullReview, setShowFullReview] = useState(false);

          // Split the review text into words
          const words = value.split(' ');

          // Function to toggle review visibility
          const toggleReview = () => setShowFullReview(!showFullReview);

          return (
            <div className="">
              <p className="text-sm">
                {/* Show only the first 10 words if showFullReview is false */}
                {showFullReview
                  ? value
                  : words.slice(0, 10).join(' ') +
                    (words.length > 10 ? '...' : '')}

                {words.length > 10 && (
                  <button
                    onClick={toggleReview}
                    className="text-blue-500 hover:underline mt-1 text-sm"
                  >
                    {showFullReview ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </p>
            </div>
          );
        },
      },
      {
        Header: 'STATUS',
        accessor: 'status',
        Cell: ({ row: { original } }) => {
          const { status } = original;
          const getStatusColor = (status) => {
            if (status === 'Approved')
              return (
                <div>
                  <p className="text-green-800 bg-green-200 border border-green-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    {status}
                    <IoMdCheckmark />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (status === 'Pending')
              return (
                <div>
                  <p className="text-rose-800 bg-rose-200 border border-rose-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    {status}
                    <IoTimeOutline />
                  </p>
                </div>
              ); // Tailwind class for red text // Default gray for any other status
          };

          return <div>{getStatusColor(status)}</div>;
        },
      },
      {
        Header: 'TIME',
        accessor: 'time',
        Cell: ({ row: { original } }) => {
          const { time } = original; // Get customer name and image link from the data

          const [isVisible, setIsVisible] = useState(false);
          const divRef = useRef(null);
          const buttonRef = useRef(null); // Reference for the button

          const handleClickOutside = (event) => {
            // Check if the click target is outside the div AND outside the button
            if (
              divRef.current &&
              !divRef.current.contains(event.target) &&
              buttonRef.current &&
              !buttonRef.current.contains(event.target)
            ) {
              setIsVisible(false); // Close the div
            }
          };

          useEffect(() => {
            if (isVisible) {
              document.addEventListener('mousedown', handleClickOutside);
            } else {
              document.removeEventListener('mousedown', handleClickOutside);
            }

            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, [isVisible]);

          return (
            <div className="flex items-center gap-2">
              <div>
                <p className="text-nowrap">{time}</p>
              </div>
              <div>
                <div className="relative">
                  <button
                    ref={buttonRef} // Add ref here for proper outside click detection
                    role="button"
                    className="btn"
                    onClick={() => setIsVisible((prev) => !prev)} // Toggle visibility
                  >
                    <div className="flex gap-[1px]">
                      <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                      <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                      <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                    </div>
                  </button>

                  {/* Dropdown Content */}
                  {isVisible && (
                    <div
                      ref={divRef}
                      className="bg-base-100 rounded-box z-[1] shadow absolute right-14 -top-3 border"
                    >
                      <div className="relative bg-white p-2 rounded-2xl">
                        <div className="h-5 w-5 bg-white border absolute -right-2 -z-10 top-0 bottom-0 m-auto rotate-45"></div>
                        <div className="flex gap-1">
                          <div className="">
                            <button className=" bg-slate-100 hover:bg-slate-200 transition-all duration-200 px-4 py-[6px] rounded">
                              <IoMdCheckmark />
                            </button>
                            <div className="h-[2px]"></div>
                            <button className=" bg-slate-100 hover:bg-slate-200 transition-all duration-200 px-4 py-[6px] rounded">
                              <MdDelete />
                            </button>
                          </div>
                          <div className="w-full">
                            <div className="h-2/4">
                              <button className="h-full w-32 bg-slate-100 hover:bg-slate-200 transition-all duration-200">
                                View
                              </button>
                            </div>
                            <div className="h-[2px]"></div>
                            <div className="h-2/4">
                              <button className="h-full w-32 text-sm bg-slate-100 hover:bg-slate-200 transition-all duration-200">
                                Export
                              </button>
                            </div>
                          </div>
                          <button className="px-3  bg-blue-100 hover:bg-blue-200 transition-all duration-200 rounded">
                            <div className="h-2/4 flex justify-center items-center">
                              <FaReply className=" text-2xl text-blue-900" />
                            </div>
                            <div className="h-2/4">
                              <p className="text-sm text-blue-900">Reply</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        customer: 'John Doe',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/59.webp',
        product: '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/7.png',
        rating: 2,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'sohan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/58.webp',
        product: 'Amazon Basics Matte Black Wired Keyboard',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/8.png',
        rating: '4',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 5,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Pending',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 5,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'John Doe',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/59.webp',
        product: '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/7.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Pending',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'sohan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/58.webp',
        product: 'Amazon Basics Matte Black Wired Keyboard',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/8.png',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'Pending',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Pending',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'John Doe',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/59.webp',
        product: '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/7.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'sohan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/58.webp',
        product: 'Amazon Basics Matte Black Wired Keyboard',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/8.png',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'jeson',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/26.webp',
        product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/11.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'abir',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/29.webp',
        product: 'HORI Racing Wheel Apex for PlayStation 4_3, an',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/12.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'jeson',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/26.webp',
        product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/11.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'abir',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/29.webp',
        product: 'HORI Racing Wheel Apex for PlayStation 4_3, an',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/12.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'jeson',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/26.webp',
        product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/11.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'abir',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/29.webp',
        product: 'HORI Racing Wheel Apex for PlayStation 4_3, an',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/12.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'jeson',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/26.webp',
        product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/11.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'abir',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/29.webp',
        product: 'HORI Racing Wheel Apex for PlayStation 4_3, an',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/12.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Dmorgan ',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/57.webp',
        product: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/9.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'Nasum',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/3.webp',
        product: 'Apple Magic Mouse (Wireless, Rechargable)',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/10.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'jeson',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/26.webp',
        product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/11.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
      {
        customer: 'abir',
        imglink:
          'https://prium.github.io/phoenix/v1.19.0/assets/img/team/40x40/29.webp',
        product: 'HORI Racing Wheel Apex for PlayStation 4_3, an',
        productimg:
          'https://prium.github.io/phoenix/v1.19.0/assets/img//products/60x60/12.png',
        rating: 4,
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae quisquam vel? Quisquam magnam perferendis libero accusantium ipsum at? Ea earum delectus omnis dolores hic! Aperiam quasi non ex quo veritatis voluptatum sit expedita in ipsam quisquam, quidem consequatur aspernatur, vero assumenda maiores repellendus architecto? Rem sequi temporibus labore totam?',
        status: 'Approved',
        time: 'Nov 03, 8:53AM',
      },
    ],
    []
  );

  // State to store search input value
  const [searchInput, setSearchInput] = useState('');

  // Filter the data based on search input
  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.customer.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.rating.toString().includes(searchInput) ||
        row.product.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [data, searchInput]);

  // Calculate the total pages
  const pageCount = Math.ceil(filteredData.length / rowsPerPage);

  // Slice the data for the current page
  const currentData = useMemo(() => {
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage, rowsPerPage]);

  // Use react-table hooks with row selection
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    { columns, data: currentData }, // Use currentData instead of filteredData
    useSortBy,
    useRowSelect
  );

  return (
    <div>
      <div className="bg-gray-100">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="p-4 md:flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Latest reviews</h1>
              <p className="font-semibold text-sm text-gray-500">
                Payment received across all channels
              </p>
            </div>

            <div className="sm:flex gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="px-4 border h-10 border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-[#4285f4]"
                />
              </div>
              <div className="mt-2 sm:mt-0 flex justify-between gap-2">
                <button className="px-2 h-10 text-sm border border-gray-300 rounded-md transition-all duration-200 hover:bg-gray-100">
                  All products
                </button>
                <div className="dropdown dropdown-end">
                  <button
                    tabIndex={0}
                    role="button"
                    className="border px-2 h-10 font-semibold border-gray-300 rounded-md transition duration-200 hover:bg-gray-100"
                  >
                    <span>...</span>
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a>Action</a>
                    </li>
                    <li>
                      <a>Another action</a>
                    </li>
                    <li>
                      <a>Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto scroll-smooth custom-scrollbar">
            <table {...getTableProps()} className="min-w-[1400px] w-full">
              <thead className="bg-blue-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="py-3 px-4 text-left text-sm font-semibold"
                      >
                        {column.render('Header')}
                        {column.id !== 'selection' && (
                          <span className="ml-2">
                            {column.isSorted
                              ? column.isSortedDesc
                                ? '🔽'
                                : '🔼'
                              : '🔽'}{' '}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="border-t hover:bg-gray-50"
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="py-2 px-4 text-sm  text-gray-700"
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-between p-4 border-t">
            <div className="flex gap-4 ">
              <button className="link-hover text-xs sm:text-sm  text-blue-600 hover:text-blue-800">
                View all »
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-xs sm:text-sm">
                Page {currentPage + 1} of {pageCount}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className="px-4 py-2 border rounded disabled:opacity-50 text-xs sm:text-sm link-hover transition-all duration-200 text-blue-600 hover:text-blue-800 font-semibold"
              >
                « Previous
              </button>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
                }
                disabled={currentPage >= pageCount - 1}
                className="px-4 py-2 border rounded disabled:opacity-50 text-xs sm:text-sm link-hover transition-all duration-200 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Next »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReviews;
