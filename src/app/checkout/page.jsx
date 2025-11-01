"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.addToCart.items);

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (item.discountPrice || item.mainPrice) * (item.quantity || 1),
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // এখানে তোমার order processing logic যাবে
    alert("Order placed successfully!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-500">Add some products to place an order.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* Billing Details Form */}
     <div className="flex-1 bg-white p-6 rounded-lg border border-gray-300">
  <h2 className="text-xl font-semibold mb-4 text-gray-900">
    Billing Details
  </h2>
  <div className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={billing.name}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={billing.email}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      value={billing.phone}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
    />
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={billing.address}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
    />
    <div className="flex gap-4">
      <input
        type="text"
        name="city"
        placeholder="City"
        value={billing.city}
        onChange={handleChange}
        className="flex-1 p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP / Postal Code"
        value={billing.zip}
        onChange={handleChange}
        className="flex-1 p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
      />
    </div>
    <input
      type="text"
      name="country"
      placeholder="Country"
      value={billing.country}
      onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded focus:border-[#DB4444] outline-none"
    />
  </div>
</div>


      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Order Summary
        </h2>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-gray-700 gap-2"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain border border-gray-300 rounded"
              />
              {/* Name and Quantity */}
              <span className="flex-1">
                {item.name} x {item.quantity}
              </span>
              {/* Price */}
              <span>${(item.discountPrice * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-4 pt-4 space-y-2 text-gray-800">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-[#DB4444] text-black py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
