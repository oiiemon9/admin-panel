import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import 'tailwindcss/tailwind.css';
import { NavLink } from 'react-router-dom';

import { LuChevronsUpDown } from 'react-icons/lu';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdGift } from 'react-icons/io';
import { LuPackage } from 'react-icons/lu';
import { FaRegFileAlt } from 'react-icons/fa';
import { RiMessage2Line } from 'react-icons/ri';

const Ordertableanddetails = () => {
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
                className="min-w-80 text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left"
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
            <span>Color</span>
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
        accessor: 'color',
        Cell: ({ row: { original } }) => {
          const { color } = original; // Get the city from the data

          return (
            <div className="flex flex-col py-1 px-2 text-nowrap">{color}</div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Size</span>
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
        accessor: 'size',
        Cell: ({ row: { original } }) => {
          const { size } = original; // Get the city from the data

          return (
            <div className="flex flex-col py-1 px-2 text-nowrap">{size}</div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
            <span>Price</span>
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
            <span>Quantity</span>
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

        accessor: 'quantity',
        Cell: ({ row: { original } }) => {
          const { quantity } = original; // Get the city from the data

          return <div className="flex flex-col py-1 px-2">{quantity}</div>;
        },
      },
      {
        Header: ({ column }) => (
          <div className="flex items-center py-1 px-2 ">
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
            <div className="flex flex-wrap gap-2 py-1 px-2 ">
              <p className="font-semibold">$ {total}</p>
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
        product: 'ASUS TUF Gaming F15 Gaming Laptop',
        productimg:
          'https://greentech.com.bd/image/cache/catalog/tuf-gaming-f15-001-550x550.jpg',
        color: 'Pure matte black',
        size: '42',
        price: 150,
        quantity: 5,
        total: 255,
      },

      {
        product: 'HP Spectre x360 Convertible Laptop',
        productimg:
          'https://computermania-bd.b-cdn.net/wp-content/uploads/Hp-9-1.jpg',
        color: 'Nightfall Black',
        size: '13.5 inches',
        price: 400,
        quantity: 1,
        total: 400,
      },
      {
        product: 'Acer Predator Helios 300 Gaming Laptop',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFexGedfPv-4mmVicHWRtUM-P7xsJjYOG4A&s',
        color: 'Steel Blue',
        size: '15.6 inches',
        price: 180,
        quantity: 3,
        total: 540,
      },
      {
        product: 'MacBook Air M2',
        productimg:
          'https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Air-M2-Midnight-8137.jpg',
        color: 'Space Gray',
        size: '13.6 inches',
        price: 450,
        quantity: 2,
        total: 900,
      },
      {
        product: 'Microsoft Surface Laptop 5',
        productimg:
          'https://static.bhphoto.com/images/images500x500/1666362913_1729186.jpg',
        color: 'Sage Green',
        size: '15 inches',
        price: 350,
        quantity: 1,
        total: 350,
      },
      {
        product: 'Razer Blade 15 Advanced Gaming Laptop',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIpeBfc_pSiexpc_ccfnUmvkoB3h0Sk9NBw&s',
        color: 'Mercury White',
        size: '15.6 inches',
        price: 500,
        quantity: 2,
        total: 1000,
      },
    ],
    []
  );

  // Use react-table hooks with row selection
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns, data }, useSortBy, useRowSelect);

  return (
    <div className="">
      <div className="">
        <div className="overflow-x-auto scroll-smooth custom-scrollbar">
          <table {...getTableProps()} className="w-full">
            <thead className="bg-blue-50">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
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
        <div className="py-3 px-2 flex items-center justify-between border-b">
          <h6 className="font-medium">Items subtotal :</h6>
          <p className="text-lg font-bold ">$1690</p>
        </div>
        <div className="mt-5 flex justify-between gap-5 flex-wrap">
          <div>
            <h6 className="text-xl font-semibold">Billing details</h6>
            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <FiUser className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Customer</p>
                  <p>
                    <button className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
                      Shatinon Mekalan
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <MdOutlineEmail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Email</p>
                  <p>
                    <button className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
                      shatinon@jeemail.com
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Phone</p>
                  <p>
                    <button className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
                      +12345698745
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <IoHomeOutline className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Address</p>
                  <div>
                    <p className="text-sm text-gray-500">Shatinon Mekalan</p>
                    <p className="text-sm text-gray-500">
                      Vancouver, British Columbia
                    </p>
                    <p className="text-sm text-gray-500">Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Shipping details</h6>

            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <MdOutlineEmail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Email</p>
                  <p>
                    <button className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
                      shatinon@jeemail.com
                    </button>
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Phone</p>
                  <p>
                    <button className="text-sm text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left">
                      +12345698745
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <FaRegCalendarAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Shipping Date</p>
                  <div>
                    <p className="text-sm text-gray-500">12 Nov, 2021</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <IoHomeOutline className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Address</p>
                  <div>
                    <p className="text-sm text-gray-500">Shatinon Mekalan</p>
                    <p className="text-sm text-gray-500">
                      Vancouver, British Columbia
                    </p>
                    <p className="text-sm text-gray-500">Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Other details</h6>
            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <IoMdGift className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Gift order</p>
                  <div>
                    <p className="text-sm text-gray-500">Yes</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <LuPackage className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Wraping</p>
                  <div>
                    <p className="text-sm text-gray-500">Magic wrapper</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 sm:block">
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <FaRegFileAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Recipient</p>
                  <div>
                    <p className="text-sm text-gray-500">Monjito Shiniga</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6 mt-3 flex gap-1">
                <div>
                  <RiMessage2Line className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-black">Gift Meaasge</p>
                  <div>
                    <p className="text-sm text-gray-500">
                      Happy Birthday Shiniga <br /> Lots of Love Buga Buga!!{' '}
                      <br />
                      Yours, <br />
                      Mekalan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordertableanddetails;
