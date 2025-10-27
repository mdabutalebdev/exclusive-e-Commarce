"use client";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 md:px-24 flex justify-between">
          <p>Free shipping on orders over $50</p>
          <div className="hidden md:flex gap-6">
            <p>Track Order</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-24 flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-black font-latin">
            Exclusive
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-latin ${
                  pathname === link.href ? "text-[#DB4444]" : "text-black"
                } hover:text-[#DB4444]`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search product..."
                className="w-[230px] px-4 py-1 border border-gray-300 bg-gray-50 rounded-md font-poppins focus:outline-none focus:border-gray-300"
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg cursor-pointer text-gray-500" />
            </div>
            <CiHeart className="text-2xl cursor-pointer" />
            <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Search + Icons (always visible) */}
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search product..."
            className="flex-1 px-4 py-2 border border-gray-300 bg-gray-50 rounded-md focus:outline-none font-poppins"
          />
          <CiHeart className="text-2xl cursor-pointer" />
          <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu Links (slide from right) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1 font-latin ${
                    pathname === link.href ? "text-[#DB4444]" : "text-black"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
