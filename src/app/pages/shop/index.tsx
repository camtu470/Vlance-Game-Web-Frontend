"use client";

import {
  IoMdArrowDropright,
  IoMdSearch,
  IoMdArrowDropdown,
} from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import NameArea from "../../../components/layout/name";
import NFTCard from "../../../components/ui/NFTCard";
import { trendingNFTs } from "../../../data/nft";
import { TbFilterSearch } from "react-icons/tb";

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNFTs = trendingNFTs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(trendingNFTs.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [price, setPrice] = useState(0.5);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const relatedProducts = [
    {
      id: 1,
      name: "Product A",
      price: "$59.00",
      rating: 5,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
    {
      id: 2,
      name: "Product B",
      price: "$49.00",
      rating: 4,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
    {
      id: 3,
      name: "Product C",
      price: "$39.00",
      rating: 3,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
  ];

  const categories = [
    { id: 1, name: "Clothing", count: 12 },
    { id: 2, name: "Digital Art", count: 8 },
    { id: 3, name: "Collectibles", count: 15 },
  ];

  return (
    <div>
      <NameArea title="SHOP" />

      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8">
        {/* SIDEBAR TOGGLE BUTTON (MOBILE) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden px-4 py-2 bg-[#171d24] text-white border flex justify-center items-center gap-3 border-[#333] rounded-lg"
        >
          <TbFilterSearch />
          Open Filters
        </button>

        {/* SIDEBAR */}
        <div
          className={`fixed md:static top-0 left-0 h-full md:h-auto w-10/12 md:w-3/12 bg-black md:bg-transparent z-50 transform transition-transform duration-300 overflow-y-auto p-4 md:p-0
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Close button for mobile */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <p className="text-lg font-bold text-white">Filters</p>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl"
            >
              ✖
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {/* SEARCH */}
            <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
              <div className="flex items-center p-2">
                <IoMdArrowDropright className="text-4xl text-[#45f882]" />
                <p className="text-base font-bold font-sans">SEARCH</p>
              </div>
              <div className="w-full p-2 flex items-center bg-[#171d24] rounded-b-lg border border-[#26292c]">
                <input
                  type="text"
                  placeholder="Search product ..."
                  className="p-2 w-10/12 bg-transparent text-[#adb0bc] outline-none"
                />
                <IoMdSearch className="w-2/12 text-2xl text-[#adb0bc]" />
              </div>
            </div>

            {/* FILTER PRICE */}
            <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
              <div className="flex items-center p-2">
                <IoMdArrowDropright className="text-4xl text-[#45f882]" />
                <p className="text-base font-bold font-sans uppercase">
                  Filter by price
                </p>
              </div>
              <div className="w-full px-4 py-3 flex flex-col bg-[#171d24] rounded-b-lg border border-[#26292c]">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.0001}
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full accent-[#45f882]"
                />
                <p className="text-sm text-[#adb0bc] mt-2 text-center">
                  Max price:{" "}
                  <span className="font-bold text-white">
                    {price.toFixed(4)} ETH
                  </span>
                </p>
              </div>
            </div>

            {/* RELATED PRODUCTS */}
            <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
              <div className="flex items-center p-2">
                <IoMdArrowDropright className="text-4xl text-[#45f882]" />
                <p className="text-base font-bold font-sans uppercase">
                  Related products
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-[#171d24] rounded-b-lg border border-[#26292c]">
                {relatedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-2 items-center hover:bg-[#232c36] p-2 
                transition-all duration-300 ease-in-out 
                hover:translate-x-1 hover:scale-[1.01] rounded-md cursor-pointer"
                  >
                    <div className="w-3/12 border border-[#26292c] rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                    <div className="w-9/12 flex flex-col gap-1">
                      <div className="flex gap-1 items-center text-yellow-400 text-xs">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-sm font-bold font-sans">{item.name}</p>
                      <p className="text-xs font-bold font-sans text-[#7A7A7A]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
              <div className="flex items-center p-2">
                <IoMdArrowDropright className="text-4xl text-[#45f882]" />
                <p className="text-base font-bold font-sans uppercase">
                  Categories
                </p>
              </div>
              <div className="flex flex-col gap-4 p-4 bg-[#171d24] uppercase font-bold font-sans text-sm text-[#adb0bc] rounded-b-lg border border-[#26292c]">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex justify-between items-center cursor-pointer 
                    transition-all duration-300 ease-in-out 
                    hover:text-[#45f882] hover:translate-x-1"
                  >
                    <p>{cat.name}</p>
                    <p>({cat.count})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-full md:w-9/12 flex flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <p className="text-[#adb0bc] text-sm">
              Showing {indexOfFirstItem + 1}–
              {Math.min(indexOfLastItem, trendingNFTs.length)} of{" "}
              {trendingNFTs.length} results
            </p>

            <div className="relative inline-block w-48">
              <select className="bg-black p-2 text-[#adb0bc] border border-[#333333] rounded-lg outline-none appearance-none w-full pr-10 cursor-pointer">
                <option value="default">Default sorting</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
              <IoMdArrowDropdown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#adb0bc] text-xl" />
            </div>
          </div>

          {/* NFT LIST */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-yellow-300 text-black"
                    : "bg-[#171d24] text-white border border-[#333]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
