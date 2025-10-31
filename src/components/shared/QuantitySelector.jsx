"use client";
import React, { useState, useEffect } from "react";

const QuantitySelector = ({ initialQty = 1, maxQty = 100, onChange }) => {
  const [quantity, setQuantity] = useState(initialQty);

  const handleIncrement = () => {
    if (quantity < maxQty) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Call onChange whenever quantity changes
  useEffect(() => {
    onChange && onChange(quantity);
  }, [quantity]);

  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden w-max">
      <button
        onClick={handleDecrement}
        className="bg-gray-200 px-3 py-1 text-lg hover:bg-gray-300 transition"
      >
        −
      </button>
      <span className="px-4 py-1 text-gray-800 font-medium">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="bg-[#DB4444] text-white px-3 py-1 text-lg hover:bg-red-600 transition"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
