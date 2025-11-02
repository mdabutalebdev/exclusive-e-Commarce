import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/addToCartSlice";
import { addToFavorite, removeFromFavorite } from "@/redux/favoriteSlice";
import { setActiveCard } from "@/redux/activeCardSlice";
import toast from "react-hot-toast";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector((state) => state.addToFavorite.items || []);
  const isFavorite = favoriteItems.some((item) => item.id === product.id);

  const activeCardId = useSelector((state) => state.activeCard.activeCardId);
  const isActive = activeCardId === product.id;

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorite(product.id));
      toast.success("Removed from Favorite", { style: { background: "#DB4444", color: "#fff" } });
    } else {
      dispatch(addToFavorite(product));
      toast.success("Added to Favorite", { style: { background: "#008000", color: "#fff" } });
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Added to Cart!");
  };

  const handleCardClick = () => {
    dispatch(setActiveCard(isActive ? null : product.id));
  };

  return (
    <div className="group bg-white w-[180px] sm:w-[240px] h-[370px] sm:h-[370px] border border-gray-200 relative mx-auto overflow-hidden">
      <div className="relative" onClick={handleCardClick}>
        <span className="text-white bg-red-500 text-xs font-semibold px-2 py-1 rounded absolute top-4 left-2 z-20">
          -{product.discountPercent}%
        </span>

        {/* Favorite Icon */}
        <div className={`flex flex-col gap-2 absolute top-4 md:top-6 right-4 z-20 transition-all duration-300 sm:opacity-0 group-hover:opacity-100 ${isActive ? "opacity-100 translate-y-0" : "translate-y-[-20px] opacity-0"}`}>
          <button className="bg-white p-2 border border-gray-300 shadow rounded" onClick={handleFavorite}>
            <IoMdHeart size={18} className={isFavorite ? "text-red-500" : "text-gray-600"} />
          </button>
        </div>

        {/* Product Image */}
        <div className="h-[180px] sm:h-[230px] relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Add to Cart Button */}
          <div
            className={`absolute left-0 w-full bg-black text-white rounded-b text-center text-sm font-medium py-2 cursor-pointer transition-all duration-500 sm:bottom-[-50px] sm:group-hover:bottom-0 ${isActive ? "bottom-0" : ""}`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </div>
        </div>
      </div>

      <Link href={`/product/${product.id}`}>
        <div className="pl-4">
          <p className="text-gray-400 text-xs sm:text-sm pt-2">{product.category}</p>
          <h3 className="text-sm sm:text-base font-medium text-gray-600 line-clamp-1">{product.name}</h3>
          <h3 className="text-[12px] sm:text-[14px] font-normal text-gray-400 line-clamp-1">{product.description}</h3>

          <div className="flex items-center gap-2">
            <p className="text-sm sm:text-lg font-medium text-gray-800">${product.discountPrice}</p>
            <p className="text-gray-400 line-through text-xs sm:text-sm">${product.mainPrice}</p>
          </div>

          <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-yellow-400 text-[12px] sm:text-[15px]" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-[12px] sm:text-[15px]" />}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={`empty-${i}`} className="text-gray-300 text-[12px] sm:text-[15px]" />
            ))}
            <span className="text-gray-500 text-[10px] sm:text-sm ml-1">({product.totalRatings})</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
