"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar, FaEye } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/addToCartSlice";
import toast from "react-hot-toast";
import { addToFavorite } from "@/redux/favoriteSlice";
import { addToCompare } from "@/redux/compareSlice";

const ProductCard = ({ product }) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const dispatch = useDispatch();

  const handelAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`Successfully added to cart!`);
  };
  const handleFavorite = () => {
    dispatch(addToFavorite(product));
    toast.success("Added to Favorite", {
      style: { background: "#008000", color: "#fff" },
    });
  };

  const handleCompare = () => {
    dispatch(addToCompare(product));
    toast.success("Added to Compare", {
      style: { background: "#008000", color: "#fff" },
    });
  };

  return (
    <div className="group bg-white w-[240px] h-[360px] border  border-gray-200 relative mx-auto overflow-hidden">
      <div className="relative">
        <span className="text-white bg-red-500 text-xs font-semibold px-2 py-1 rounded absolute top-4  left-2 m-auto z-20">
          -{product.discountPercent}%
        </span>

        {/* Hover icons */}
        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-4 right-4 z-20">
          <button
            className="bg-white p-2 shadow hover:bg-gray-100 transition"
            onClick={handleFavorite}
          >
            <CiHeart className="text-gray-700" size={15} />
          </button>

          <button
            className="bg-white p-2 shadow hover:bg-gray-100 transition"
            onClick={handleCompare}
          >
            <GoGitCompare className="text-gray-700" size={14} />
          </button>
        </div>

        {/* Fixed height image */}
        <div className="h-[230px] relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Add to Cart button (appears on hover) */}
          <div
            className="absolute bottom-[-50px] left-0 w-full bg-black text-white rounded-b text-center text-sm font-medium py-2 transition-all duration-500 group-hover:bottom-0 cursor-pointer"
            onClick={handelAddToCart}
          >
            Add to Cart
          </div>
        </div>
      </div>

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

        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400 text-[15px]" />
          ))}
          {hasHalfStar && (
            <FaStarHalfAlt className="text-yellow-400 text-[15px]" />
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar
              key={`empty-${i}`}
              className="text-gray-300 text-[15px]"
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">
            ({product.totalRatings})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
