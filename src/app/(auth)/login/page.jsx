"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // তোমার login logic এখানে যাবে
    alert(`Logged in with: ${loginData.emailOrPhone}`);
  };

  return (
    <div className="flex justify-center items-center  py-10 bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Log in to Exclusive
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email or Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={loginData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#DB4444]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#DB4444]"
              required
            />
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:text-[#DB4444]">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#DB4444] text-black py-3 rounded-lg font-semibold  "
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center text-gray-600 mt-6">
          New Customer?{" "}
          <Link href="/signup" className="text-[#DB4444] font-semibold hover:underline">
            Sign Up Here
          </Link>
        </p>
      </div>
    </div>
  );
}
