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
import { TbShoppingBagPlus } from 'react-icons/tb';
import { PiPackageDuotone } from 'react-icons/pi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdDeliveryDining } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Customerorders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 7;

  // Define the columns and data for the table
  const columns = useMemo(
    () => [
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Order-id</span>
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

        accessor: 'orderid',
        Cell: ({ row: { original } }) => (
          <button className="text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left py-1 px-2">
            {original.orderid}
          </button>
        ),
      },

      {
        Header: ({ column }) => (
          <div className="hidden xl:flex items-center py-1 px-2 ">
            <span>Total</span>
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

        accessor: 'total',
        Cell: ({ row: { original } }) => {
          const { total } = original;
          return (
            <div className="hidden xl:flex flex-wrap gap-2 py-1 px-2 ">
              <p className="font-semibold">$ {total}</p>
            </div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Payment Status</span>
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
        accessor: 'paymentstatus',
        Cell: ({ row: { original } }) => {
          const { paymentstatus } = original;
          const getStatusColor = (paymentstatus) => {
            if (paymentstatus === 'Paid')
              return (
                <div>
                  <p className="text-green-800 bg-green-200 border border-green-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Paid
                    <IoMdCheckmark />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (paymentstatus === 'Pending')
              return (
                <div>
                  <p className="text-blue-800 bg-blue-200 border border-blue-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Pending
                    <AiOutlineLoading3Quarters />
                  </p>
                </div>
              ); // Tailwind class for green text

            if (paymentstatus === 'Cancelled')
              return (
                <div>
                  <p className="text-gray-800 bg-gray-200 border border-gray-500 rounded-md  flex justify-center items-center gap-1 px-2 w-fit">
                    Cancelled
                    <IoClose />
                  </p>
                </div>
              ); // Tailwind class for red text // Default gray for any other status
          };

          return <div>{getStatusColor(paymentstatus)}</div>;
        },
      },

      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Order Status</span>
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
        accessor: 'orderstatus',
        Cell: ({ row: { original } }) => {
          const { orderstatus } = original;
          const getStatusColor = (orderstatus) => {
            if (orderstatus === 'Processing')
              return (
                <div>
                  <p className="text-blue-800 bg-blue-200 border border-blue-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Processing
                    <TbShoppingBagPlus />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (orderstatus === 'Confirmed')
              return (
                <div>
                  <p className="text-lime-800 bg-lime-200 border border-lime-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Confirmed
                    <IoMdCheckmark />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (orderstatus === 'Shipped')
              return (
                <div>
                  <p className="text-emerald-800 bg-emerald-200 border border-emerald-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Shipped
                    <PiPackageDuotone />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (orderstatus === 'Intransit')
              return (
                <div>
                  <p className="text-teal-800 bg-teal-200 border border-teal-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    In Transit
                    <LiaShippingFastSolid />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (orderstatus === 'Outfordelivery')
              return (
                <div>
                  <p className="text-rose-800 bg-rose-200 border border-rose-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Out For Delivery
                    <MdDeliveryDining />
                  </p>
                </div>
              ); // Tailwind class for green text
            if (orderstatus === 'Delivered')
              return (
                <div>
                  <p className="text-green-800 bg-green-200 border border-green-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Delivered
                    <RiEmotionHappyLine />
                  </p>
                </div>
              ); // Tailwind class for red text // Default gray for any other status
            if (orderstatus === 'Cancelled')
              return (
                <div>
                  <p className="text-gray-800 bg-gray-200 border border-gray-500 rounded-md  flex justify-center items-center gap-1 px-2">
                    Cancelled
                    <IoClose />
                  </p>
                </div>
              ); // Tailwind class for red text // Default gray for any other status
          };

          return <div>{getStatusColor(orderstatus)}</div>;
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden lg:flex items-center py-1 px-2 ">
            <span>Delivery Type</span>
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
        accessor: 'deliverytype',
        Cell: ({ row: { original } }) => {
          const { deliverytype } = original; // Get the city from the data

          return (
            <div className="hidden lg:flex flex-col py-1 px-2">
              {deliverytype}
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
            <span>Date</span>
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
        accessor: 'date',
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
            <div className="flex items-center justify-end gap-2 py-1 px-2 ">
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
        orderid: '#12345',
        total: 255,
        deliverytype: 'Cash on delivery',
        orderstatus: 'Processing',
        paymentstatus: 'Paid',
        date: 'Dec 01, 12:00 PM',
      },
      {
        orderid: '#654984',

        total: 215,
        deliverytype: 'Free shipping',
        orderstatus: 'Confirmed',
        paymentstatus: 'Paid',
        date: 'Nov 20, 10:30 AM',
      },
      {
        orderid: '#56498',

        total: 658,
        deliverytype: 'Local pickup',
        orderstatus: 'Shipped',
        paymentstatus: 'Paid',
        date: 'Nov 19, 2:15 PM',
      },
      {
        orderid: '#549784',

        total: 752,
        deliverytype: 'Standard shipping',
        orderstatus: 'Intransit',
        paymentstatus: 'Paid',
        date: 'Nov 18, 5:45 PM',
      },
      {
        orderid: '#54985',

        total: 786,
        deliverytype: '	Express',
        orderstatus: 'Outfordelivery',
        paymentstatus: 'Pending',
        date: 'Nov 21, 11:00 AM',
      },
      {
        orderid: '#95848',

        total: 785,
        deliverytype: '	Local delivery',
        orderstatus: 'Delivered',
        paymentstatus: 'Pending',
        date: 'Dec 02, 1:45 PM',
      },
      {
        orderid: '#5469874',

        total: 548,
        deliverytype: '	Express',
        orderstatus: 'Cancelled',
        paymentstatus: 'Cancelled',
        date: 'Dec 02, 1:45 PM',
      },
      {
        orderid: '#321987',
        total: 425,
        deliverytype: 'Cash on delivery',
        orderstatus: 'Processing',
        paymentstatus: 'Pending',
        date: 'Dec 03, 3:30 PM',
      },
      {
        orderid: '#987123',
        total: 620,
        deliverytype: 'Standard shipping',
        orderstatus: 'Confirmed',
        paymentstatus: 'Paid',
        date: 'Dec 04, 9:15 AM',
      },
      {
        orderid: '#123789',
        total: 350,
        deliverytype: 'Local pickup',
        orderstatus: 'Shipped',
        paymentstatus: 'Paid',
        date: 'Dec 05, 6:00 PM',
      },
      {
        orderid: '#456789',
        total: 890,
        deliverytype: 'Express',
        orderstatus: 'Outfordelivery',
        paymentstatus: 'Pending',
        date: 'Dec 06, 8:45 AM',
      },
      {
        orderid: '#789456',
        total: 730,
        deliverytype: 'Free shipping',
        orderstatus: 'Delivered',
        paymentstatus: 'Paid',
        date: 'Dec 07, 12:30 PM',
      },
      {
        orderid: '#258369',
        total: 510,
        deliverytype: 'Local delivery',
        orderstatus: 'Cancelled',
        paymentstatus: 'Cancelled',
        date: 'Dec 08, 4:15 PM',
      },
      {
        orderid: '#963852',
        total: 675,
        deliverytype: 'Standard shipping',
        orderstatus: 'Processing',
        paymentstatus: 'Pending',
        date: 'Dec 09, 11:00 AM',
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
      <div>
        <h4 className="text-2xl font-bold text-center md:text-start">
          Orders <span className="text-gray-500 font-normal">(97)</span>
        </h4>
      </div>
      <div className="mt-5">
        <div className="">
          <div className="">
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
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, pageCount - 1)
                      )
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
    </div>
  );
};

export default Customerorders;
