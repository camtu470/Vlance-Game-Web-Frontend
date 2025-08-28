"use client";

import { useState, useEffect } from "react";
import { GiFireDash } from "react-icons/gi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import NFTCard from "../../ui/NFTCard";
import { trendingNFTs } from "../../../data/nft";

const TopTrending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < trendingNFTs.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleNFTs = trendingNFTs.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold uppercase">
            Top Trending
          </h1>
          <GiFireDash className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="flex gap-2 items-center text-3xl sm:text-4xl">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30"
          >
            <IoIosArrowDropleft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= trendingNFTs.length}
            className="disabled:opacity-30"
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>

      {/* NFT Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleNFTs.map((nft) => (
          <NFTCard key={`${nft.id}-${nft.handle}`} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
