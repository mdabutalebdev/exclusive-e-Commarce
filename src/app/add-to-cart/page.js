"use client";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import QuantitySelector from "@/components/shared/QuantitySelector";
import { clearCart, removeFromCart, updateQuantity } from "@/redux/addToCartSlice";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addToCart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart!");
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.success("All items removed!");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * (item.quantity || 1),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
         <p className="text-4xl font-medium text-[#DB4444]">0</p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-500">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
        <h1 className="text-2xl font-semibold text-[#DB4444]">Your Cart</h1>
        <button
          onClick={handleClear}
          className="flex items-center gap-2 bg-[#DB4444] text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <MdDelete size={20} /> Clear All
        </button>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="py-3 px-4 sm:px-6 text-left">Product</th>
              <th className="py-3 px-4 sm:px-6 text-center">Price</th>
              <th className="py-3 px-4 sm:px-6 text-center">Quantity</th>
              <th className="py-3 px-4 sm:px-6 text-center">Total</th>
              <th className="py-3 px-4 sm:px-6 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="transition duration-150">
                {/* Product + Image */}
                <td className="py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain border border-gray-300 rounded"
                  />
                  <span className="font-medium text-gray-800">{item.name}</span>
                </td>

                {/* Price */}
                <td className="py-4 px-4 sm:px-6 text-center text-gray-700">
                  <span className="block sm:inline">${item.discountPrice}</span>
                </td>

                {/* Quantity */}
                <td className="py-4 px-4 sm:px-6 text-center text-gray-700">
                  <QuantitySelector
                    initialQty={item.quantity || 1}
                    onChange={(qty) => {
                      dispatch(updateQuantity({ id: item.id, quantity: qty }));
                    }}
                  />
                </td>

                {/* Total */}
                <td className="py-4 px-4 sm:px-6 text-center font-semibold text-gray-800">
                  ${(item.discountPrice * item.quantity).toFixed(2)}
                </td>

                {/* Action */}
                <td className="py-4 px-4 sm:px-6 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Price Section */}
      <div className="mt-8 flex flex-col sm:flex-row justify-end gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="border-t border-gray-300 my-3"></div>
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <button className="mt-5 w-full bg-[#DB4444] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
