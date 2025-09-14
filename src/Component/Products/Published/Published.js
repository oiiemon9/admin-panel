import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';
import { NavLink } from 'react-router-dom';

import { MdDelete } from 'react-icons/md';

import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

const Published = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 6;

  // Define the columns and data for the table
  const columns = useMemo(
    () => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div className="py-1 px-2">
            <input
              type="checkbox"
              {...getToggleAllRowsSelectedProps()}
              className="form-checkbox h-4 w-4"
            />
          </div>
        ),
        Cell: ({ row }) => (
          <div className="py-1 px-2">
            <input
              type="checkbox"
              {...row.getToggleRowSelectedProps()}
              className="form-checkbox h-4 w-4"
            />
          </div>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>PRODUCT NAME</span>
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
          const { product, productimg } = original;
          const truncatedProduct =
            product.length > 50 ? product.substring(0, 50) + '...' : product;

          return (
            <div className="flex gap-2 py-1 px-2 ">
              <div className=" flex justify-center items-center">
                <button className="border rounded h-20 w-20 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={productimg}
                    alt={product}
                  />
                </button>
              </div>
              <button
                title={product}
                className="min-w-52 text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left"
              >
                {truncatedProduct}
              </button>
            </div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>PRICE</span>
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

        accessor: 'price',
        Cell: ({ row: { original } }) => (
          <div className="text-gray-700 py-1 px-2">${original.price}</div>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>CATEGORY</span>
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

        accessor: 'category',
        Cell: ({ row: { original } }) => {
          const { category } = original;
          return (
            <div className="py-1 px-2">
              {Array.isArray(category) ? category.join(', ') : category}
            </div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="hidden xl:flex items-center py-1 px-2 ">
            <span>TAGS</span>
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

        accessor: 'tags',
        Cell: ({ row: { original } }) => {
          const { tags } = original;
          return (
            <div className="hidden xl:flex flex-wrap gap-2 min-w-52 py-1 px-2 ">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-md  bg-gray-200 text-gray-800 px-2 py-1 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden lg:flex items-center py-1 px-2 ">
            <span>RATING</span>
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
          <div className="hidden md:flex items-center py-1 px-2 ">
            <span>VENDOR</span>
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
        accessor: 'vendor',
        Cell: ({ row: { original } }) => (
          <div className="hidden md:block py-1 px-2 ">
            <button className="text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
              {original.vendor}
            </button>
          </div>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
            <span>PUBLISHED ON</span>
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
            <span>ACTION</span>
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
        product:
          'ASUS TUF Gaming F15 Gaming Laptop asjdfhoisdf asdfjhas hasdf hnasdfnasdflkasdf ',
        productimg:
          'https://greentech.com.bd/image/cache/catalog/tuf-gaming-f15-001-550x550.jpg',
        price: 150,
        category: ['Computer', 'Electronic'],
        tags: [
          'GAMING',
          'BATTERY',
          'PERFORMANCE',
          'WIRELESS',
          'PERFORMANCE',
          'WIRELESS',
          'PERFORMANCE',
          'WIRELESS',
        ],
        vendor: 'Kizzstore',
        publishedOn: 'Dec 01, 12:00 PM',
        rating: '4',
      },
      {
        product: 'ASUS TUF Gaming F15 Gaming Laptop',
        productimg:
          'https://www.asus.com/media/global/gallery/63nq57jtwcnkqduo_setting_xxx_0_90_end_2000.png',
        price: 1500,
        category: ['Computer', 'Laptop'],
        tags: ['GAMING', 'BATTERY', 'PERFORMANCE', 'WIRELESS'],
        vendor: 'Kizzstore',
        publishedOn: 'Dec 01, 12:00 PM',
        rating: '4.0',
      },
      {
        product: 'B Samsung Galaxy S23 Ultra',
        productimg:
          'https://adminapi.applegadgetsbd.com/storage/media/large/Galaxy-S23-Ultra-Green-3380.jpg',
        price: 1200,
        category: ['Smartphone', 'Android'],
        tags: ['5G', 'Camera', 'AMOLED', 'Fast Charging'],
        vendor: 'TechWorld',
        publishedOn: 'Nov 5, 10:30 AM',
        rating: '4.8',
      },
      {
        product: 'C Sony WH-1000XM5',
        productimg:
          'https://adminapi.applegadgetsbd.com/storage/media/large/5318-55349.jpg',
        price: 350,
        category: ['Headphones', 'Wireless'],
        tags: ['Noise Cancelling', 'Bluetooth', 'Premium Sound'],
        vendor: 'AudioHub',
        publishedOn: 'Nov 3, 3:00 PM',
        rating: '4.9',
      },
      {
        product: 'D Apple MacBook Pro 16-inch',
        productimg:
          'https://istockbd.com/cdn/shop/products/16inchmacbookproinbangladesh_iStockBD.jpg?v=1647173727&width=600',
        price: 2500,
        category: ['Laptop', 'Mac'],
        tags: ['M1 Pro', 'Retina Display', 'Fast Performance'],
        vendor: 'Apple Store',
        publishedOn: 'Oct 28, 12:00 PM',
        rating: '4.6',
      },
      {
        product: 'Fitbit Charge 5',
        productimg:
          'https://i5.walmartimages.com/seo/Fitbit-Charge-5-Fitness-Tracker-Steel-Blue-and-Platinum-Stainless-Steel_ba5585d3-b08c-42bb-b457-4cb1e563a912.2450ebd5d9c7ded7324afb7952d25a4b.jpeg',
        price: 150,
        category: ['Fitness Tracker', 'Health'],
        tags: ['Heart Rate Monitor', 'GPS', 'Sleep Tracking'],
        vendor: 'Fitbit',
        publishedOn: 'Nov 1, 9:00 AM',
        rating: '4.5',
      },
      {
        product: 'Dell XPS 13 Laptop',
        productimg:
          'https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-13-2-in-1-10.jpg',
        price: 1600,
        category: ['Laptop', 'Windows'],
        tags: ['Ultrabook', 'Touchscreen', 'Slim'],
        vendor: 'Dell Store',
        publishedOn: 'Nov 15, 11:00 AM',
        rating: '4.7',
      },
      {
        product: '1 NVIDIA RTX 3080 GPU',
        productimg:
          'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg',
        price: 700,
        category: ['PC Hardware', 'GPU'],
        tags: ['Ray Tracing', 'High Performance', 'Graphics'],
        vendor: 'TechHub',
        publishedOn: 'Nov 20, 2:00 PM',
        rating: '4.9',
      },
      {
        product: '2 Apple MacBook Pro 16-inch',
        productimg:
          'https://istockbd.com/cdn/shop/products/16inchmacbookproinbangladesh_iStockBD.jpg?v=1647173727&width=600',
        price: 2500,
        category: ['Laptop', 'Mac'],
        tags: ['M1 Pro', 'Retina Display', 'Fast Performance'],
        vendor: 'Apple Store',
        publishedOn: 'Oct 28, 12:00 PM',
        rating: '4.6',
      },
      {
        product: '3 Fitbit Charge 5',
        productimg:
          'https://i5.walmartimages.com/seo/Fitbit-Charge-5-Fitness-Tracker-Steel-Blue-and-Platinum-Stainless-Steel_ba5585d3-b08c-42bb-b457-4cb1e563a912.2450ebd5d9c7ded7324afb7952d25a4b.jpeg',
        price: 150,
        category: ['Fitness Tracker', 'Health'],
        tags: ['Heart Rate Monitor', 'GPS', 'Sleep Tracking'],
        vendor: 'Fitbit',
        publishedOn: 'Nov 1, 9:00 AM',
        rating: '4.5',
      },
      {
        product: 'Dell XPS 13 Laptop',
        productimg:
          'https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-13-2-in-1-10.jpg',
        price: 1600,
        category: ['Laptop', 'Windows'],
        tags: ['Ultrabook', 'Touchscreen', 'Slim'],
        vendor: 'Dell Store',
        publishedOn: 'Nov 15, 11:00 AM',
        rating: '4.7',
      },
      {
        product: 'NVIDIA RTX 3080 GPU',
        productimg:
          'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg',
        price: 700,
        category: ['PC Hardware', 'GPU'],
        tags: ['Ray Tracing', 'High Performance', 'Graphics'],
        vendor: 'TechHub',
        publishedOn: 'Nov 20, 2:00 PM',
        rating: '4.9',
      },
    ],
    []
  );

  // State to store search input value
  const [searchInput, setSearchInput] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.product?.toLowerCase().includes(searchInput.toLowerCase()) ||
        '' ||
        row.rating?.toString().includes(searchInput) ||
        '' ||
        row.customer?.toLowerCase().includes(searchInput.toLowerCase()) ||
        ''
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
      <div className="">
        <div className="">
          <div className="p-4 md:flex">
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="px-4 border h-10 border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-[#4285f4]"
                />
              </div>
              <div className="mt-2 sm:mt-0 flex flex-wrap gap-2">
                <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-blue-700 h-fit">
                  All Products
                </button>
                <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-rose-700 h-fit">
                  Product Remove
                </button>
                <NavLink
                  to="/addproduct"
                  className="py-2 px-4 rounded border bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm h-fit"
                >
                  Add product
                </NavLink>

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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 0))
                  }
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
    </div>
  );
};

export default Published;
