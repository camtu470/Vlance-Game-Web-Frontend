import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { trendingNFTs } from "../../../../../data/nft";
import NFTCard from "../../../../../components/ui/NFTCard";
import SectionHeader from "../../../../../components/ui/SectionHeader";

export default function NFTDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nft = trendingNFTs.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(nft?.images?.[0] || "");
  const [activeTab, setActiveTab] = useState<
    "description" | "info" | "reviews"
  >("description");
  if (!nft) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-[#121212]">
        <p className="text-2xl mb-4">NFT not found!</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-yellow-300 text-black font-bold rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ✅ Lọc sản phẩm liên quan (vd: cùng category, khác id), tối đa 4
  const relatedNFTs = trendingNFTs
    .filter((item) => item.category === nft.category && item.id !== nft.id)
    .slice(0, 4);

  return (
    <div className="p-6 min-h-screen bg-[#121212] text-white py-20">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-green-300 hover:text-green-400 mb-6"
      >
        <IoIosArrowBack /> Back
      </button>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images Section */}
          <div className="lg:w-7/12 w-full flex flex-col-reverse sm:flex-row gap-6">
            {/* Thumbnails */}
            <div className="w-full sm:w-3/12 flex sm:flex-col gap-4 sm:gap-6">
              {nft.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-24 sm:h-32 w-24 sm:w-auto p-2 rounded-md cursor-pointer ${
                    selectedImage === img
                      ? "ring-2 ring-gray-500"
                      : "bg-gray-800"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full sm:w-9/12 h-[250px] sm:h-[450px] bg-gray-800 p-2 rounded-md">
              <img
                src={selectedImage}
                alt={nft.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-5/12 w-full flex flex-col gap-4 p-4 py-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-yellow-300 text-xl font-bold">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <p className="text-sm">(0 out of 5)</p>
            </div>

            <p className="uppercase text-3xl sm:text-4xl font-extrabold">
              {nft.name}
            </p>

            <p className="text-2xl font-extrabold text-green-400 flex items-center gap-2">
              <FaEthereum /> {nft.lastBid} ETH
            </p>

            <p className="text-sm text-gray-400">{nft.shortdescription}</p>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 items-center py-2">
              <div className="flex items-center">
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-800 text-white text-xl rounded-l hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-14 h-10 sm:h-12 text-center bg-gray-900 text-white border-x border-gray-600"
                />
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-800 text-white text-xl rounded-r hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button className="bg-green-600 text-white hover:bg-yellow-400 hover:text-black text-xs font-bold h-10 sm:h-12 px-6 rounded-md">
                ADD TO CART
              </button>
            </div>

            <div className="flex gap-2 items-center pb-6 text-white hover:text-yellow-500 border-b border-gray-800">
              <FaRegHeart />
              <p className="uppercase font-bold text-sm">Add to Wishlist</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="text-gray-300">
                <strong className="text-white">SKU:</strong> {nft.sku}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Category:</strong> {nft.category}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Tags :</strong>{" "}
                {nft.tags.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            {["description", "info", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`p-4 sm:px-10 rounded text-sm font-bold ${
                  activeTab === tab
                    ? "bg-slate-800"
                    : "bg-transparent hover:bg-slate-800"
                }`}
                onClick={() =>
                  setActiveTab(tab as "description" | "info" | "reviews")
                }
              >
                {tab === "info"
                  ? "ADDITIONAL INFORMATION"
                  : tab.toUpperCase() + (tab === "reviews" ? " (0)" : "")}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="p-6 bg-black rounded">
              <p className="text-sm text-gray-300">{nft.description}</p>
            </div>
          )}
          {activeTab === "info" && (
            <div className="overflow-x-auto bg-black">
              <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700">
                <tbody className="divide-y divide-gray-700">
                  {nft.specs?.map((spec, idx) => (
                    <tr key={idx} className="border-b border-gray-700">
                      <th className="py-3 px-4 font-semibold w-1/3">
                        {spec.label}
                      </th>
                      <td className="py-3 px-4 italic">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="flex flex-col gap-4 bg-black p-6 rounded">
              <p className="font-bold text-2xl">REVIEWS</p>
              <p className="text-sm text-gray-300">There are no reviews yet.</p>
              <p className="text-sm text-gray-400">
                Be the first to review “{nft.name}”
              </p>

              <form className="flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Name <span className="text-green-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Email <span className="text-green-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Your Rating <span className="text-green-600">*</span>
                  </label>
                  <div className="flex gap-1 items-center text-xl text-yellow-500 font-bold">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Your Review <span className="text-green-600">*</span>
                  </label>
                  <textarea className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4" />
                </div>
                <button className="w-5/12 sm:w-2/12 p-4 font-bold text-sm bg-green-500 rounded text-white hover:bg-green-600">
                  SUBMIT REVIEW
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10 mt-10">
        <SectionHeader subtitle="RELATED" title="PRODUCTS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedNFTs.length > 0 ? (
            relatedNFTs.map((related) => (
              <NFTCard key={`${related.id}-${related.handle}`} nft={related} />
            ))
          ) : (
            <p className="text-gray-400">Không có sản phẩm liên quan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
