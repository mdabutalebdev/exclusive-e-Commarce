"use client";
import { useState } from "react";

export default function SignupPage() {
  const [signupData, setSignupData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // তোমার signup logic এখানে যাবে
    alert(`Account created for: ${signupData.name}`);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={signupData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#DB4444]"
              required
            />
          </div>

          {/* Email or Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={signupData.emailOrPhone}
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
              value={signupData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#DB4444]"
              required
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-[#DB4444] text-black py-3 rounded-lg font-semibold "
          >
            Create Account
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#DB4444] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
