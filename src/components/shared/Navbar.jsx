"use client";
import Link from "next/link";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "@/redux/searchSlice";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchPopupOpen, setSearchPopupOpen] = useState(false);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);

  const cartItems = useSelector((state) => state.addToCart.items || []);
  const favoriteItems = useSelector((state) => state.addToFavorite.items || []);
  const searchTerm = useSelector((state) => state.search.term || "");
  const products = useSelector((state) => state.products.items || []);
  const dispatch = useDispatch();

  const links = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
    if (term.trim().length > 0) {
      setSearchPopupOpen(true);
    } else {
      setSearchPopupOpen(false);
    }
  };

  // Filter products based on searchTerm (name starts with term)
  const filteredProducts = searchTerm.length >= 2
  ? products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];


  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 md:px-24 flex justify-between">
          <p className="text-gray-100 max-sm:pl-13">Free shipping on orders over $50</p>
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
          <div className="hidden md:flex items-center gap-3 relative" ref={userMenuRef}>
            {/* Search Box */}
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => searchTerm.trim() && setSearchPopupOpen(true)}
                placeholder="Search product..."
                className="w-[230px] px-4 py-1 border border-gray-300 bg-gray-50 rounded-md font-poppins focus:outline-none focus:border-gray-300"
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg cursor-pointer text-gray-500" />

              {/* Optimized Search Popup */}
              {searchPopupOpen && filteredProducts.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-y-auto mt-1 rounded-md">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setSearchPopupOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain" />
                      <span className="text-sm text-gray-700">{product.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/favorite">
              <div className="relative cursor-pointer">
                <CiHeart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favoriteItems.length}
                </span>
              </div>
            </Link>

            <Link href="/add-to-cart">
              <div className="relative cursor-pointer">
                <HiOutlineShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              </div>
            </Link>

            <Link href="/login">
              <CiUser
                className="text-2xl cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />
            </Link>
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
        <div className="md:hidden px-4 pb-3 flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-md font-poppins focus:outline-none focus:border-gray-300"
            />
            <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer text-gray-500" />

            {/* Mobile Search Popup */}
            {searchPopupOpen && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-y-auto mt-1 rounded-md">
                
                {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setSearchPopupOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain" />
                      <span className="text-sm text-gray-700">{product.name}</span>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {mobileMenuOpen && (
          <nav className="md:hidden px-4 pb-3 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-latin py-2 px-3 rounded ${
                  pathname === link.href ? "text-[#DB4444]" : "text-black hover:text-[#DB4444]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
