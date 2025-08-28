import { FaShoppingCart } from "react-icons/fa";
import type { NFT } from "../../data/nft";
import { useNavigate } from "react-router-dom";

interface NFTCardProps {
  nft: NFT;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/products/${nft.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 flex flex-col gap-4 shadow rounded-xl bg-[#182029] text-white cursor-pointer hover:scale-[1.02] transition-transform"
    >
      {/* Avatar & Info */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={nft.avatar}
            alt={`Avatar of ${nft.username}`}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-bold text-sm">{nft.username}</p>
            <p className="text-xs text-gray-500">{nft.handle}</p>
          </div>
        </div>
      </div>

      <img
        src={nft.image}
        alt={`NFT by ${nft.username}`}
        className="rounded-xl h-[200px] object-cover"
      />

      <div className="w-9/12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      {/* Bid Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Last Bid</p>
          <div className="flex gap-1 items-center">
            <span className="text-yellow-300">Ξ</span>
            <p className="font-bold">
              {nft.lastBid} <span className="text-yellow-300">ETH</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-yellow-300 text-black  text-xs lg:text-sm font-bold p-1 px-3 rounded hover:bg-yellow-400">
            Buy
          </button>
          <button className="flex items-center gap-2 bg-green-600 text-white font-bold p-1 px-3 rounded hover:bg-green-600">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
