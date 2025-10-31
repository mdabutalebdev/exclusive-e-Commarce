"use client";
import Link from "next/link";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  // Click outside close handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 md:px-24 flex justify-between">
          <p>Free shipping on orders over $50</p>
          <div className="hidden md:flex gap-6">
            <Link href="/track-order">Track Order</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 relative py-2">
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
          <div
            className="hidden md:flex items-center gap-3 relative"
            ref={userMenuRef}
          >
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

            {/* User Icon */}
            <div className="relative">
              <CiUser
                className="text-2xl cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />

              {/* Dropdown Popup */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  <div className="flex items-center gap-1 px-2 py-2">
                    <CiUser />
                    <Link
                      href="/account"
                      className="block text-sm text-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Manage My Account
                    </Link>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-2">
                    <MdOutlineBookmarkBorder />
                    <Link
                      href="/orders"
                      className="block text-sm text-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                  </div>
                  <button
                    className="w-full text-left flex items-center gap-1 px-2 py-2 text-sm text-gray-700"
                    onClick={() => {
                      setUserMenuOpen(false);
                      alert("Logged out!");
                    }}
                  >
                    <TbLogout2 />
                    Logout
                  </button>
                </div>
              )}
            </div>
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

        {/* Mobile Search + Icons */}
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search product..."
            className="flex-1 px-4 py-2 border border-gray-300 bg-gray-50 rounded-md focus:outline-none font-poppins"
          />
          <CiHeart className="text-2xl cursor-pointer" />
          <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
          <CiUser
            className="text-2xl cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          />
        </div>

        {/* Mobile User Menu */}
        {userMenuOpen && (
          <div className="md:hidden absolute right-4 top-[95px] w-44 bg-white border border-gray-200 rounded-md shadow-md z-50">
            <Link
              href="/account"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setUserMenuOpen(false)}
            >
              Manage My Account
            </Link>
            <Link
              href="/orders"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setUserMenuOpen(false)}
            >
              My Orders
            </Link>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setUserMenuOpen(false);
                alert("Logged out!");
              }}
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Links */}
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
