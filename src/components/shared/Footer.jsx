import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiFacebookLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 px-24">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <p className="mt-2 text-gray-300 max-w-xs">
            Exclusive Electronics Store – Authentic laptops, mobiles, gadgets, and more at the best prices in Bangladesh.
          </p>
        </div>
           <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <p>+880 01622-243011</p>
          <p>support@exclusive.com</p>
          <p>Dhaka, Bangladesh</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Accounts</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-[#DB4444] duration-300">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#DB4444] duration-300">
              Login / Register
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#DB4444] duration-300">
                Cart
              </Link>
            </li>
             
            <li>
              <Link href="/contact" className="hover:text-[#DB4444] duration-300">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-[#DB4444] duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#DB4444] duration-300">
              Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#DB4444] duration-300">
               FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#DB4444] duration-300">
               Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
            <h3 className="font-semibold mb-3">Download Our App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="flex gap-2 mt-2 items-center">
                <div className="">
                    <Image 
                    src="/images/qr-code.png"
                    alt="qr code"
                    width={80}
                    height={80}
                    />
                </div>
                <div className="">
                    <Image 
                    src="/images/play-store.png"
                    alt="play store"
                    width={100}
                    height={100}
                    />
                    <Image 
                    src="/images/app-store.png"
                    alt="app store"
                    width={100}
                    height={110}
                    className="mt-2"
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-4 text-2xl">
                 <FaFacebookF />

                 <FaTwitter />
                 <IoLogoInstagram />
                  <FaLinkedinIn />

            </div>
        </div>

        {/* Contact Info */}
       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Exclusive Electronics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
