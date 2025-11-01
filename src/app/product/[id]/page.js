"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTruck,
  FaUndo,
} from "react-icons/fa";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { addToCart } from "@/redux/addToCartSlice";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items || []);
  const cartItems = useSelector((state) => state.addToCart.items);

  const product = products.find((p) => p.id === Number(id));
  const cartItem = cartItems.find((item) => item.id === product?.id);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  useEffect(() => {
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cartItem]);

  // Early return if product not found
  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  // Active main image state
  const [mainImage, setMainImage] = useState(product.image);

  // Thumbnails - for demo same image repeated
  const thumbnails = [product.image, product.image, product.image, product.image];

  // Rating calculation
  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Added to Cart!");
  };

  const handleQuantityChange = (qty) => setQuantity(qty);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="flex justify-between">
          {/* Product Image */}
          <div className="w-[50%]">
            <div className="flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full md:w-[60%] h-96 object-cover p-4 pt-20"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex items-center justify-around gap-3 ml-5 pt-26">
              {thumbnails.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`border p-1 cursor-pointer  rounded ${
                    mainImage === img ? "border-[#DB4444]" : "border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name}-${index}`}
                    className="h-30 w-30 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 w-[50%]">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="text-yellow-400 text-[15px]" />
              ))}
              {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-[15px]" />}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} className="text-gray-300 text-[15px]" />
              ))}
              <span className="text-gray-500 text-sm ml-2">({product.totalRatings || 0})</span>
            </div>

            {/* Stock */}
            <div className="text-green-600 font-medium mb-4">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-orange-600 mb-6">
              ${product.discountPrice || product.mainPrice}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description || "No description available."}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mr-4">Quantity:</h3>
              <QuantitySelector initialQty={quantity} onChange={handleQuantityChange} />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <Link href="/checkout">
                <div className="bg-[#DB4444] text-white py-2 px-6 rounded-lg font-semibold text-lg text-center cursor-pointer">
                  Buy Now
                </div>
              </Link>
              <div
                onClick={handleAddToCart}
                className="cursor-pointer bg-gray-900 text-white py-2 px-6 rounded-lg font-semibold text-lg text-center"
              >
                Add to Cart
              </div>
            </div>

            {/* Delivery Info */}
            <div className="p-6 rounded-lg border border-gray-300">
              <div className="flex items-center mb-3">
                <FaTruck className="w-5 h-5 text-black mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Free Delivery</h3>
              </div>
              <p className="text-gray-600 mb-4">Enter your postal code for Delivery Availability</p>
              <div className="border-t pt-4 border-gray-300">
                <div className="flex items-center mb-2">
                  <FaUndo className="w-5 h-5 text-black mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Return Delivery</h3>
                </div>
                <p className="text-gray-600">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="text-black underline cursor-pointer">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
