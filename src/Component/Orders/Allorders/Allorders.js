import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';
import { NavLink } from 'react-router-dom';

import { MdDelete } from 'react-icons/md';
import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMdCheckmark } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { PiPackageDuotone } from 'react-icons/pi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdDeliveryDining } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';

const Allorders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 7;

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
            <div className="flex items-center gap-2 py-1 px-2 ">
              <div className=" flex justify-center items-center">
                <NavLink
                  to="/customerdetails"
                  className="border rounded-full h-12 w-12 overflow-hidden"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={customerimg}
                    alt={customer}
                  />
                </NavLink>
              </div>
              <div className="">
                <NavLink
                  title={customer}
                  to="/customerdetails"
                  className="link link-hover text-black text-nowrap"
                >
                  {truncatedcustomer}
                </NavLink>
              </div>
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
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        orderid: '#15955',
        total: 256,
        customer: 'Carry Anna',
        customerimg:
          'https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?t=st=1731303458~exp=1731307058~hmac=4fd9d005b4252ea1f3f4e9c3f602bdb03e9b55ba404eccc12008ed60b62de834&w=740',
        paymentstatus: 'Pending',
        orderstatus: 'Processing',
        deliverytype: 'Cash on delivery',
        date: 'Dec 01, 12:00 PM',
      },
      {
        orderid: '#56455',
        total: 2658,
        customer: 'Sophia Adams',
        customerimg:
          'https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=1024x1024&w=is&k=20&c=VruKKTu4jBF2xPEEQUMWwd4bwJPysSsqLuZ7h1OyD8M=',
        paymentstatus: 'Paid',
        orderstatus: 'Confirmed',
        deliverytype: 'Free shipping',
        date: 'Nov 28, 05:10 PM',
      },
      {
        orderid: '#564568',
        total: 485,
        customer: 'Liam Johnson',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-smiling-man_23-2147800457.jpg',

        paymentstatus: 'Cancelled',
        orderstatus: 'Shipped',
        deliverytype: 'Local pickup',
        date: 'Dec 01, 01:20 PM',
      },
      {
        orderid: '#564568',
        total: 578,
        customer: 'James Taylor',
        customerimg:
          'https://media.istockphoto.com/id/1351081750/photo/handsome-smiling-young-indian-man-portrait-cheerful-men-with-crossed-arms-looking-at-camera.jpg?s=612x612&w=0&k=20&c=goD-sghGZ01Qgqlq8xmcM61eTrdCb8bIPJcr4CwaGog=',
        paymentstatus: 'Paid',
        orderstatus: 'Intransit',
        deliverytype: 'Standard shipping',
        date: 'Dec 01, 02:45 PM',
      },
      {
        orderid: '#854',
        total: 59885,
        customer: 'Amelia Harris',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-woman-smiling_23-2148090942.jpg',
        paymentstatus: 'Pending',
        orderstatus: 'Outfordelivery',
        date: 'Nov 30, 11:20 AM',
        deliverytype: '	Express',
      },
      {
        orderid: '#65895',
        total: 25478,
        customer: 'Benjamin White',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-handsome-man_23-2147805122.jpg',
        paymentstatus: 'Pending',
        orderstatus: 'Delivered',
        date: 'Dec 02, 09:50 AM',
        deliverytype: '	Local delivery',
      },
      {
        orderid: '#6958',
        total: 25486,
        customer: 'Charlotte Lewis',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-smiling-woman_23-2147800463.jpg',
        paymentstatus: 'Cancelled',
        orderstatus: 'Cancelled',
        date: 'Nov 29, 04:30 PM',
        deliverytype: '	Local delivery',
      },
      {
        orderid: '#15644',
        total: 789,
        customer: 'Oliver Green',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-bearded-man_23-2147800710.jpg',
        paymentstatus: 'Pending',
        orderstatus: 'Processing',
        deliverytype: 'Standard shipping',
        date: 'Dec 02, 03:15 PM',
      },
      {
        orderid: '#99877',
        total: 1200,
        customer: 'Emma Clark',
        customerimg:
          'https://img.freepik.com/free-photo/smiling-woman-sitting-office_23-2148884329.jpg',
        paymentstatus: 'Paid',
        orderstatus: 'Shipped',
        deliverytype: 'Express',
        date: 'Dec 03, 10:00 AM',
      },
      {
        orderid: '#11234',
        total: 675,
        customer: 'Lucas Martin',
        customerimg:
          'https://img.freepik.com/free-photo/handsome-man-smiling_23-2147891234.jpg',
        paymentstatus: 'Pending',
        orderstatus: 'Intransit',
        deliverytype: 'Free shipping',
        date: 'Nov 30, 08:45 AM',
      },
      {
        orderid: '#87433',
        total: 4550,
        customer: 'Mia Wilson',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-happy-woman_23-2148899876.jpg',
        paymentstatus: 'Paid',
        orderstatus: 'Delivered',
        deliverytype: 'Local pickup',
        date: 'Dec 01, 06:30 PM',
      },
      {
        orderid: '#34221',
        total: 300,
        customer: 'Henry Brown',
        customerimg:
          'https://img.freepik.com/free-photo/portrait-cheerful-man_23-2148901010.jpg',
        paymentstatus: 'Cancelled',
        orderstatus: 'Cancelled',
        deliverytype: 'Local delivery',
        date: 'Dec 03, 11:15 AM',
      },
      {
        orderid: '#56789',
        total: 850,
        customer: 'Ella Turner',
        customerimg:
          'https://img.freepik.com/free-photo/smiling-woman-looking-camera_23-2148984556.jpg',
        paymentstatus: 'Pending',
        orderstatus: 'Outfordelivery',
        deliverytype: 'Standard shipping',
        date: 'Nov 29, 03:50 PM',
      },
      {
        orderid: '#23145',
        total: 1120,
        customer: 'Noah King',
        customerimg:
          'https://img.freepik.com/free-photo/young-man-smiling_23-2147808898.jpg',
        paymentstatus: 'Paid',
        orderstatus: 'Confirmed',
        deliverytype: 'Free shipping',
        date: 'Dec 02, 02:25 PM',
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
        row.orderid?.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.total
          ?.toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        row.date?.toLowerCase().includes(searchInput.toLowerCase()) // Check for city
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

export default Allorders;
