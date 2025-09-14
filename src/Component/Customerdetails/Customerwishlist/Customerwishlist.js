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

const Customerwishlist = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 7;

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
                <button className="border rounded h-12 w-12 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={productimg}
                    alt={product}
                  />
                </button>
              </div>
              <button
                title={product}
                className="max-w-52 text-blue-600 hover:underline hover:decoration-blue-600 focus:outline-none focus:underline focus:decoration-blue-600 text-left"
              >
                {truncatedProduct}
              </button>
            </div>
          );
        },
      },
      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
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
            <div className="hidden sm:flex flex-col py-1 px-2">{color}</div>
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
        Cell: ({ row: { original } }) => {
          const { price } = original; // Get the city from the data

          return <div className="flex flex-col py-1 px-2">{price}</div>;
        },
      },

      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
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
            <div className="hidden sm:flex flex-col py-1 px-2">{size}</div>
          );
        },
      },

      {
        Header: ({ column }) => (
          <div className="hidden sm:flex items-center py-1 px-2 ">
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
            <div className="hidden sm:flex flex-wrap gap-2 py-1 px-2 ">
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
        price: 255,
        total: 255,
      },
      {
        product:
          'Dell XPS 15 Laptop Ultra HD InfinityEdge Display with Premium Build Quality',
        productimg:
          'https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-15-5-1.jpg',
        color: 'Silver',
        size: '15 inch',
        price: 1200,
        total: 1200,
      },
      {
        product:
          'Apple MacBook Pro 16-inch M1 Pro with Liquid Retina XDR Display',
        productimg:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16-silver-m1-2021_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1643239769000',
        color: 'Space Gray',
        size: '16 inch',
        price: 2499,
        total: 2499,
      },
      {
        product:
          'HP Spectre x360 2-in-1 Laptop with Touchscreen and Stylus Support',
        productimg:
          'https://smartbd.com/wp-content/uploads/2023/08/652688_437137_01_front_comping.jpg',
        color: 'Dark Ash Silver',
        size: '13 inch',
        price: 1399,
        total: 1399,
      },
      {
        product: 'Lenovo ThinkPad X1 Carbon Gen 9 Ultralight Business Laptop',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsu_YYTiLL8hgCbgRy64XgWiGls9NQhwaTg&s',
        color: 'Black',
        size: '14 inch',
        price: 1699,
        total: 1699,
      },
      {
        product:
          'Microsoft Surface Laptop 4 with Touchscreen and Long Battery Life',
        productimg: 'https://m.media-amazon.com/images/I/711jgF2LHPL.jpg',
        color: 'Platinum',
        size: '13.5 inch',
        price: 1299,
        total: 1299,
      },
      {
        product:
          'Acer Predator Helios 300 Gaming Laptop with High Refresh Rate Display',
        productimg:
          'https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_UF1000,1000_QL80_.jpg',
        color: 'Metallic Black',
        size: '15.6 inch',
        price: 1099,
        total: 1099,
      },
      {
        product: 'Razer Blade 15 Advanced Gaming Laptop with RTX 3080 Graphics',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIpeBfc_pSiexpc_ccfnUmvkoB3h0Sk9NBw&s',
        color: 'Black',
        size: '15 inch',
        price: 2499,
        total: 2499,
      },
      {
        product:
          'Samsung Galaxy Book Pro 360 2-in-1 Convertible Laptop with AMOLED Display',
        productimg:
          'https://computermania-bd.b-cdn.net/wp-content/uploads/SAMSUNG-Galaxy-Book-Pro-Price-in-BD.jpg',
        color: 'Mystic Navy',
        size: '13.3 inch',
        price: 1399,
        total: 1399,
      },
      {
        product:
          'ASUS ZenBook Duo 14 with Dual Screen for Enhanced Productivity',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3zCj5sdeOYapFcR3XVeBWWLYLcMQZwkm3g&s',
        color: 'Celestial Blue',
        size: '14 inch',
        price: 1499,
        total: 1499,
      },
      {
        product:
          'LG Gram 17 Ultra-Lightweight Laptop with Large Display and Extended Battery',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2ESCFvo0Tgm5fLwgmYMKzKiLBr_z5NGNEw&s',
        color: 'White',
        size: '17 inch',
        price: 1849,
        total: 1849,
      },
      {
        product:
          'HP Pavilion x360 14 Convertible Laptop with Touchscreen and Thin Design',
        productimg:
          'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08212326.png',
        color: 'Natural Silver',
        size: '14 inch',
        price: 699,
        total: 699,
      },
      {
        product:
          'Apple iPad Pro 12.9-inch (5th Gen) with Liquid Retina XDR Display',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cUmUiDP7Qu1IFTjLr7UFbR4ULa6MJn8WDA&s',
        color: 'Space Gray',
        size: '12.9 inch',
        price: 1099,
        total: 1099,
      },
      {
        product: 'Google Pixelbook Go Lightweight Chromebook with 4K Display',
        productimg: 'https://m.media-amazon.com/images/I/81sDDc7rKqL.jpg',
        color: 'Just Black',
        size: '13.3 inch',
        price: 849,
        total: 849,
      },
      {
        product:
          'Dell Alienware M15 R6 Gaming Laptop with High-Performance Cooling System',
        productimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnE1KYOn0gGGgK_ADnkEiIkXKBuhNOHuvZuQ&s',
        color: 'Dark Side of the Moon',
        size: '15 inch',
        price: 2199,
        total: 2199,
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
          Wishlist <span className="text-gray-500 font-normal">(52)</span>
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
export default Customerwishlist;
