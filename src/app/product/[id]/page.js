"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import QuantitySelector from "@/components/shared/QuantitySelector";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/redux/addToCartSlice";
import { FaTruck, FaUndo } from "react-icons/fa";
export default function ProductDetailsPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items || []);
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  // **Check if product exists**
  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
           
            <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2  h-90 object-contain p-4 bg-amber-300 pt-20"
          />

         
          {/* Product Details */}
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar
                  key={`full-${i}`}
                  className="text-yellow-400 text-[15px]"
                />
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
              <span className="text-gray-500 text-sm ml-2">
                ({product.totalRatings || 0})
              </span>
            </div>

            {/* Stock Status */}
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

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                  Colours:
                </h3>
                <div className="flex space-x-4">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                  Size:
                </h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size, i) => (
                    <div
                      key={i}
                      className={`w-12 h-12 flex items-center justify-center border rounded-lg font-medium ${
                        i === 0
                          ? "bg-orange-600 text-white border-orange-600"
                          : "text-gray-700 border-gray-300"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mr-4">
                Quantity:
              </h3>
              <QuantitySelector
                initialQty={product.quantity || 1} // 'product' use koro
                onChange={(qty) => {
                  dispatch(updateQuantity({ id: product.id, quantity: qty }));
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <div className="flex-2 bg-[#DB4444] text-white py-3 px-6 rounded-lg font-semibold text-lg text-center">
                Buy Now
              </div>
              <div className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-lg text-center">
                Add to Cart
              </div>
            </div>

            <div className="  ">
              {/* Free Delivery */}
              <div className="p-6 rounded-lg   border border-gray-600">
                <div className="flex items-center mb-3">
                  <FaTruck className="w-5 h-5 text-black mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Free Delivery
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Enter your postal code for Delivery Availability
                </p>
                <div className="border-t pt-4 border-gray-300">
                  <div className="flex items-center mb-2">
                    <FaUndo className="w-5 h-5 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Return Delivery
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="text-black underline cursor-pointer">
                      Details
                    </span>
                  </p>
                </div>
              </div>

              {/* Return Delivery */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
