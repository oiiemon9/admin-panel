import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';
import { NavLink } from 'react-router-dom';

import { MdDelete } from 'react-icons/md';
import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

const Newcustomers = () => {
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
            <span>CUSTOMER</span>
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

        accessor: 'customername',
        Cell: ({ row: { original } }) => {
          const { customer, customerimg } = original;
          const truncatedcustomer =
            customer.length > 50 ? customer.substring(0, 50) + '...' : customer;

          return (
            <div className="flex gap-2 py-1 px-2 ">
              <div className=" flex justify-center items-center">
                <button className="border rounded-full h-12 w-12 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={customerimg}
                    alt={customer}
                  />
                </button>
              </div>
              <button
                title={customer}
                className="link link-hover text-black text-nowrap"
              >
                {truncatedcustomer}
              </button>
            </div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>E-MAIL</span>
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

        accessor: 'email',
        Cell: ({ row: { original } }) => (
          <a
            href={`mailto:${original.email}`}
            className="text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left py-1 px-2"
          >
            {original.email}
          </a>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>ORDERS</span>
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

        accessor: 'orders',
        Cell: ({ row: { original } }) => {
          const { orders } = original;
          return <div className="py-1 px-2">{orders}</div>;
        },
      },

      {
        Header: ({ column }) => (
          <div className="hidden xl:flex items-center py-1 px-2 ">
            <span>SPENT</span>
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

        accessor: 'spent',
        Cell: ({ row: { original } }) => {
          const { spent } = original;
          return (
            <div className="hidden xl:flex flex-wrap gap-2 py-1 px-2 ">
              <p className="font-semibold">$ {spent}</p>
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden lg:flex items-center py-1 px-2 ">
            <span>CITY</span>
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
        accessor: 'city',
        Cell: ({ row: { original } }) => {
          const { city } = original; // Get the city from the data
          const totalStars = 5; // Total number of stars to display

          // Convert the city to a number and calculate the filled stars
          const filledStars = Math.round(Number(city));

          return (
            <div className="hidden lg:flex flex-col items-center py-1 px-2">
              {city}
            </div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="hidden md:flex items-center py-1 px-2 ">
            <span>LAST-SEEN</span>
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
        accessor: 'lastseen',
        Cell: ({ row: { original } }) => (
          <div className="hidden md:block py-1 px-2 ">{original.lastseen}</div>
        ),
      },
      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
            <span>LAST-ORDER</span>
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
        accessor: 'lastorder',
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
        customer: 'Amelia Harris',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-woman-smiling_23-2148090942.jpg',
        email: 'ameliaharris75@gmail.com',
        orders: 59,
        spent: 16750,
        city: 'Rome',
        lastseen: '1 hour ago',
        lastorder: 'Nov 30, 11:20 AM',
      },
      {
        customer: 'Benjamin White',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-handsome-man_23-2147805122.jpg',
        email: 'benjaminwhite63@gmail.com',
        orders: 80,
        spent: 25400,
        city: 'Dublin',
        lastseen: '45 minutes ago',
        lastorder: 'Dec 02, 09:50 AM',
      },
      {
        customer: 'Charlotte Lewis',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-smiling-woman_23-2147800463.jpg',
        email: 'charlottelewis88@gmail.com',
        orders: 45,
        spent: 9800,
        city: 'Madrid',
        lastseen: '2 hours ago',
        lastorder: 'Nov 29, 04:30 PM',
      },
      {
        customer: 'Mason King',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-young-man_23-2147801324.jpg',
        email: 'masonking27@gmail.com',
        orders: 65,
        spent: 19500,
        city: 'Chicago',
        lastseen: '1 hour ago',
        lastorder: 'Nov 30, 08:10 PM',
      },
      {
        customer: 'Carry Anna',
        customerimg:
          'https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?t=st=1731303458~exp=1731307058~hmac=4fd9d005b4252ea1f3f4e9c3f602bdb03e9b55ba404eccc12008ed60b62de834&w=740',
        email: 'annac34@gmail.com',
        orders: 89,
        spent: 25652,
        city: 'Budapest',
        lastseen: '34 min ago',
        lastorder: 'Dec 01, 12:00 PM',
      },
      {
        customer: 'Sophia Adams',
        customerimg:
          'https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=1024x1024&w=is&k=20&c=VruKKTu4jBF2xPEEQUMWwd4bwJPysSsqLuZ7h1OyD8M=',
        email: 'sophiaadams62@gmail.com',
        orders: 112,
        spent: 32000,
        city: 'Paris',
        lastseen: '1 hour ago',
        lastorder: 'Nov 28, 05:10 PM',
      },
      {
        customer: 'Liam Johnson',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-smiling-man_23-2147800457.jpg',
        email: 'liamjohnson88@gmail.com',
        orders: 85,
        spent: 18900,
        city: 'Berlin',
        lastseen: '30 minutes ago',
        lastorder: 'Dec 01, 01:20 PM',
      },
      {
        customer: 'James Taylor',
        customerimg:
          'https://media.istockphoto.com/id/1351081750/photo/handsome-smiling-young-indian-man-portrait-cheerful-men-with-crossed-arms-looking-at-camera.jpg?s=612x612&w=0&k=20&c=goD-sghGZ01Qgqlq8xmcM61eTrdCb8bIPJcr4CwaGog=',
        email: 'jamestaylor56@gmail.com',
        orders: 92,
        spent: 22200,
        city: 'Sydney',
        lastseen: '30 minutes ago',
        lastorder: 'Dec 01, 02:45 PM',
      },
      {
        customer: 'Olivia Brown',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-woman-casual-clothing_23-2147893479.jpg',
        email: 'oliviabrown33@gmail.com',
        orders: 47,
        spent: 12600,
        city: 'Toronto',
        lastseen: '15 minutes ago',
        lastorder: 'Dec 02, 09:00 AM',
      },
      {
        customer: 'Noah Wilson',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-young-man-smiling_23-2147890780.jpg',
        email: 'noahwilson22@gmail.com',
        orders: 103,
        spent: 27850,
        city: 'Los Angeles',
        lastseen: '5 minutes ago',
        lastorder: 'Dec 03, 12:10 PM',
      },
      {
        customer: 'Isabella Martinez',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-woman-smiling_23-2147589451.jpg',
        email: 'isabellamartinez50@gmail.com',
        orders: 63,
        spent: 15030,
        city: 'Madrid',
        lastseen: '1 hour ago',
        lastorder: 'Nov 29, 06:00 PM',
      },
    ],
    []
  );

  // State to store search input value
  const [searchInput, setSearchInput] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.customer?.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.email?.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.city?.toLowerCase().includes(searchInput.toLowerCase()) // Check for city
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
                  All customers
                </button>
                <button className="py-2 px-4 rounded border hover:bg-slate-200 transition-all duration-200 text-sm text-rose-700 h-fit">
                  customer Remove
                </button>
                <NavLink
                  to="/addcustomer"
                  className="py-2 px-4 rounded border bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm h-fit"
                >
                  Add customer
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
export default Newcustomers;
