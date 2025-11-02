"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck, FaUndo } from "react-icons/fa";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { addToCart } from "@/redux/addToCartSlice";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items || []);
  const cartItems = useSelector((state) => state.addToCart.items);

  const product = products.find((p) => p.id === Number(id));
  const cartItem = cartItems.find((item) => item.id === product?.id);

  // ===== Hooks at top =====
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
  const [mainImage, setMainImage] = useState(product?.image || "");

  useEffect(() => {
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cartItem]);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  // Thumbnails (real product.images array preferable)
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
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          
          {/* Product Images */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <Image
                src={mainImage}
                alt={product.name}
                className="w-full md:w-3/4 h-80 md:h-96 object-cover rounded"
                height={384}
                width={256}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto py-4 w-full md:w-3/4">
              {thumbnails.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`border p-1 cursor-pointer rounded ${
                    mainImage === img ? "border-[#DB4444]" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    height={80}
                    width={80}
                    alt={`${product.name}-${index}`}
                    className="h-20 w-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className="text-yellow-400 text-sm md:text-base" />
              ))}
              {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm md:text-base" />}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} className="text-gray-300 text-sm md:text-base" />
              ))}
              <span className="text-gray-500 text-sm ml-2">({product.totalRatings || 0})</span>
            </div>

            {/* Stock */}
            <div className={`font-medium mb-4 ${product.inStock ? "text-green-600" : "text-red-500"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </div>

            {/* Price */}
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              ${product.discountPrice || product.mainPrice}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description || "No description available."}</p>

            {/* Quantity */}
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mr-4">Quantity:</h3>
              <QuantitySelector initialQty={quantity} onChange={handleQuantityChange} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/checkout">
                <div className="bg-[#DB4444] text-white py-2 px-6 rounded-lg font-semibold text-center cursor-pointer">
                  Buy Now
                </div>
              </Link>
              <div
                onClick={handleAddToCart}
                className="cursor-pointer bg-gray-900 text-white py-2 px-6 rounded-lg font-semibold text-center"
              >
                Add to Cart
              </div>
            </div>

            {/* Delivery & Return Info */}
            <div className="p-4 md:p-6 rounded-lg border border-gray-300">
              <div className="flex items-center mb-2">
                <FaTruck className="w-5 h-5 text-black mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Free Delivery</h3>
              </div>
              <p className="text-gray-600 mb-4">Enter your postal code for Delivery Availability</p>

              <div className="border-t border-gray-300 pt-4">
                <div className="flex items-center mb-2">
                  <FaUndo className="w-5 h-5 text-black mr-2" />
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
