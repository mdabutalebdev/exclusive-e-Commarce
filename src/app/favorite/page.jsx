"use client";
import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { clearFavorite, removeFromFavorite } from "@/redux/favoriteSlice";
import { addToCart } from "@/redux/addToCartSlice";
import toast from "react-hot-toast";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.addToFavorite.items);

  const handleRemove = (id) => {
    dispatch(removeFromFavorite(id));
    toast.success("Removed from favorites!");
  };

  const handleClear = () => {
    dispatch(clearFavorite());
    toast.success("All favorites cleared!");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to Cart!", {
      style: { background: "#008000", color: "#fff" },
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
        <p className="text-5xl text-[#DB4444]">0</p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No favorite items yet 
        </h2>
        <p className="text-gray-500">
          Browse products and add them to your favorites to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-20 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-[#DB4444]">Your Favorites</h1>
        <button
          onClick={handleClear}
          className="flex items-center gap-2 bg-[#DB4444] text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <MdDelete size={20} /> Clear All
        </button>
      </div>

      {/* Favorite Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map((product) => {
          const fullStars = Math.floor(product.rating);
          const hasHalfStar = product.rating % 1 >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

          return (
            <div
              key={product.id}
              className="group bg-white w-[240px] h-[360px] border border-gray-200 relative mx-auto overflow-hidden"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-3 right-3 bg-red-500 text-white p-1.5 rounded-md z-20 hover:bg-red-600 transition"
              >
                <MdDelete size={18} />
              </button>

              {/* Discount Badge */}
              <span className="text-white bg-red-500 text-xs font-semibold px-2 py-1 rounded absolute top-4 left-2 z-10">
                -{product.discountPercent}%
              </span>

              {/* Product Image */}
              <div className="h-[230px] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={200}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Add to Cart Button */}
                <div
                  className="absolute bottom-[-50px] left-0 w-full bg-black text-white rounded-b text-center text-sm font-medium py-2 transition-all duration-500 group-hover:bottom-0 cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </div>
              </div>

              {/* Product Info */}
              <div className="pl-4">
                <p className="text-gray-400 text-sm pt-2">{product.category}</p>
                <h3 className="text-base font-medium text-gray-600 line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-gray-800">
                    ${product.discountPrice}
                  </p>
                  <p className="text-gray-400 line-through text-sm">
                    ${product.mainPrice}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-yellow-400 text-[15px]" />
                  ))}
                  {hasHalfStar && (
                    <FaStarHalfAlt className="text-yellow-400 text-[15px]" />
                  )}
                  {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-gray-300 text-[15px]" />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">
                    ({product.totalRatings})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritePage;
