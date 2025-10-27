import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      {/* nav */}
      <div className="bg-black  ">
        <div className="container mx-auto px-24">
          <div className="flex justify-between py-2 items-center">
            <div className="">
              <p className="text-center text-[#FAFAFA]">
                Free shipping on orders over $50
              </p>
            </div>
            <div className="flex gap-8">
              <p className="text-white">Track Order</p>
              <p className="text-white">About Us</p>
              <p className="text-white">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      {/* nav end*/}

      <div className="bg-white border-b border-gray-200 pb-2">
        <div className="container mx-auto  flex items-center justify-between px-24 py-2">
          <div className="">
            <h3 className="font-bold text-3xl">Exclusive</h3>
          </div>
          <div className="flex gap-10 justify-center   ">
            <Link href="/" className="text-black font-latin">
              Home
            </Link>
            <Link href="/about" className="text-black font-latin">
              About
            </Link>
            <Link href="/product" className="text-black font-latin">
              Product
            </Link>
            <Link href="/contact" className="text-black font-latin">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4  ">
           <div className="flex items-center">
             <input
              type="text"
              placeholder="search product..."
              className="w-[230px] px-4 py-1 border border-gray-300 bg-gray-50 rounded-md font-poppins focus:outline-none focus:border-gray-300"
            />
            <CiSearch className="-translate-x-7 font-medium"/>

           </div>
            <CiHeart className="text-2xl"/>
            <HiOutlineShoppingCart className="text-2xl font-light"/>   

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
