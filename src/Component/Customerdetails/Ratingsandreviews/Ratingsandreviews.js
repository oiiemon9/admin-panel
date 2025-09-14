import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';
import { NavLink } from 'react-router-dom';

import { MdDelete } from 'react-icons/md';
import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMdCheckmark } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Ratingsandreviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 6;

  // Define the columns and data for the table
  const columns = useMemo(
    () => [
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Product Name</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),

        accessor: 'productname',
        Cell: ({ row: { original } }) => {
          const { productname } = original;
          return (
            <div className="flex gap-2 py-1 px-2 ">
              <button
                title={productname}
                className="max-w-60 truncate text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left"
              >
                {productname}
              </button>
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden lg:flex items-center py-1 px-2 ">
            <span>Rating</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),
        accessor: 'rating',
        Cell: ({ row: { original } }) => {
          const { rating } = original; // Get the rating from the data
          const totalStars = 5; // Total number of stars to display

          // Convert the rating to a number and calculate the filled stars
          const filledStars = Math.round(Number(rating));

          return (
            <div className="hidden lg:flex flex-col items-center py-1 px-2">
              <div>
                {[...Array(totalStars)].map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < filledStars ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500 w-fit">{rating}</div>{' '}
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Review</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),
        accessor: 'review',
        Cell: ({ value }) => {
          // State to manage the visibility of full review
          const [showFullReview, setShowFullReview] = useState(false);

          // Split the review text into words
          const words = value.split(' ');

          // Function to toggle review visibility
          const toggleReview = () => setShowFullReview(!showFullReview);

          return (
            <div className=" py-1 px-2">
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
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Status</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),
        accessor: 'status',
        Cell: ({ row: { original } }) => {
          const { status } = original;
          const getStatusColor = (status) => {
            if (status === 'Approved')
              return (
                <div>
                  <p className="text-green-800 bg-green-200 border border-green-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Approved
                    <IoMdCheckmark />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (status === 'Pending')
              return (
                <div>
                  <p className="text-blue-800 bg-blue-200 border border-blue-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Pending
                    <AiOutlineLoading3Quarters />
                  </p>
                </div>
              ); // Tailwind class for green text

            if (status === 'Cancelled')
              return (
                <div>
                  <p className="text-gray-800 bg-gray-200 border border-gray-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Cancelled
                    <IoClose />
                  </p>
                </div>
              ); // Tailwind class for red text // Default gray for any other status
          };

          return <div>{getStatusColor(status)}</div>;
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
            <span>Published On</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),
        accessor: 'publishedOn',
        Cell: ({ value }) => (
          <div className="hidden sm:block py-1 px-2  text-gray-500 text-nowrap">
            {value}
          </div>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Action</span>
            {column.id !== 'selection' && (
              <span className="ml-2">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )
                ) : (
                  <LuChevronsUpDown />
                )}{' '}
              </span>
            )}
          </div> // Hide header on smaller screens (below xl)
        ),

        accessor: 'action',
        Cell: ({ row }) => {
          const [isVisible, setIsVisible] = useState(false);
          const divRef = useRef(null);
          const buttonRef = useRef(null);

          const handleClickOutside = (event) => {
            if (
              divRef.current &&
              !divRef.current.contains(event.target) &&
              buttonRef.current &&
              !buttonRef.current.contains(event.target)
            ) {
              setIsVisible(false);
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

          const handleAction = (rowData) => {
            console.log('Button clicked for:', rowData);
            // Add your action handling logic here
          };

          return (
            <div className="flex items-center gap-2 py-1 px-2 ">
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsVisible((prev) => !prev)}
                  className="btn text-blue-600 hover:text-blue-800 font-semibold "
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
                    className="bg-base-100 rounded-box z-[1] shadow border absolute right-14 -top-2"
                  >
                    <div className="relative bg-white p-2 rounded-2xl">
                      <div className="h-5 w-5 bg-white border absolute -right-2 -z-10 top-0 bottom-0 m-auto rotate-45"></div>
                      <div className="flex gap-1">
                        <div>
                          <button
                            onClick={() => handleAction(row.original)}
                            className="text-rose-800 bg-rose-200 border border-rose-500 hover:bg-rose-300 transition-all duration-200 px-4 py-[6px] rounded h-full flex flex-col items-center"
                          >
                            <span className="  w-fit">
                              <MdDelete />
                            </span>
                            <span>Remove</span>
                          </button>
                        </div>
                        <div className="w-full">
                          <div className="h-2/4">
                            <button
                              onClick={() => handleAction(row.original)}
                              className="h-full w-32 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                            >
                              View
                            </button>
                          </div>
                          <div className="h-[2px]"></div>
                          <div className="h-2/4">
                            <button
                              onClick={() => handleAction(row.original)}
                              className="h-full w-32 text-sm bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                            >
                              Export
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
        productname: 'ASUS TUF Gaming F15 Gaming Laptop',
        rating: '4',
        review:
          'Great laptop with high performance for gaming and multitasking.asiudhfpdosnoigso dfoi hasdfn oihoidnfoihnas9dnf oashf89ahsdif a lorem50sdhfposhadf hasdf asdfoa[sid-fhpasd f[asdjf09hjaposdf nasdfj90asdjfpajs dfihoadnskasdofiy8asdfasdofijaoisdfklasudhogfuhasd fgs',
        publishedOn: 'Dec 01, 12:00 PM',
        status: 'Approved',
      },
      {
        productname: 'HP Omen 15 Gaming Laptop',
        rating: '5',
        review:
          'Impressive performance and stunning visuals, perfect for gaming and creative work. The cooling system is excellent, and the battery life is good for a gaming laptop. Highly recommend!',
        publishedOn: 'Nov 29, 10:30 AM',
        status: 'Approved',
      },
      {
        productname: 'Dell Inspiron 15 3000 Series',
        rating: '3',
        review:
          'Affordable option for everyday use. Performance is decent but struggles with heavy tasks. Great for basic tasks like browsing and document editing. Battery life is average.',
        publishedOn: 'Nov 28, 9:00 AM',
        status: 'Pending',
      },
      {
        productname: 'Apple MacBook Air M1',
        rating: '5',
        review:
          'Incredible performance with the M1 chip, super lightweight, and has excellent battery life. Perfect for professional work and smooth multitasking. A bit pricey but worth it.',
        publishedOn: 'Dec 02, 1:15 PM',
        status: 'Approved',
      },
      {
        productname: 'Lenovo Legion 5 Pro',
        rating: '4',
        review:
          'Powerful gaming laptop with solid build quality. Runs demanding games smoothly with high frame rates. The display is sharp, though the battery life could be better.',
        publishedOn: 'Dec 01, 2:45 PM',
        status: 'Cancelled',
      },
      {
        productname: 'Acer Aspire 7',
        rating: '3',
        review:
          'Good value for the price, handles most tasks well, but not ideal for intensive gaming. Great for students and professionals on a budget. Build quality is decent.',
        publishedOn: 'Nov 30, 4:00 PM',
        status: 'Pending',
      },

      {
        productname: 'ASUS TUF Gaming F15 Gaming Laptop',
        rating: '4',
        review:
          'Great laptop with high performance for gaming and multitasking.asiudhfpdosnoigso dfoi hasdfn oihoidnfoihnas9dnf oashf89ahsdif a lorem50sdhfposhadf hasdf asdfoa[sid-fhpasd f[asdjf09hjaposdf nasdfj90asdjfpajs dfihoadnskasdofiy8asdfasdofijaoisdfklasudhogfuhasd fgs',
        publishedOn: 'Dec 01, 12:00 PM',
        status: 'Pending',
      },
      {
        productname: 'ASUS TUF Gaming F15 Gaming Laptop',
        rating: '4',
        review:
          'Great laptop with high performance for gaming and multitasking.asiudhfpdosnoigso dfoi hasdfn oihoidnfoihnas9dnf oashf89ahsdif a lorem50sdhfposhadf hasdf asdfoa[sid-fhpasd f[asdjf09hjaposdf nasdfj90asdjfpajs dfihoadnskasdofiy8asdfasdofijaoisdfklasudhogfuhasd fgs',
        publishedOn: 'Dec 01, 12:00 PM',
        status: 'Cancelled',
      },
    ],
    []
  );

  const pageCount = Math.ceil(data.length / rowsPerPage);
  const currentData = useMemo(() => {
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, rowsPerPage]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: currentData }, useSortBy, useRowSelect);
  return (
    <div className="mt-8">
      <h4 className="text-2xl font-bold text-center md:text-start">
        Ratings & reviews{' '}
        <span className="text-gray-500 font-normal">(29)</span>
      </h4>
      <div className="mt-5">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="overflow-x-auto scroll-smooth custom-scrollbar">
            <table {...getTableProps()} className="w-full">
              <thead className="bg-blue-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="text-left text-sm font-semibold text-nowrap"
                      >
                        <div className="flex items-center">
                          {column.render('Header')}
                        </div>
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
                          className="text-sm  text-gray-700"
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

export default Ratingsandreviews;
