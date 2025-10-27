 
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


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

     <div className="bg-white">
       <div className="container mx-auto  flex items-center justify-between px-24 py-2">
        <div className="">
         <h3 className="font-bold text-3xl">Exclusive</h3>
        </div>
        <div className="flex gap-10 justify-center   ">
          <Link href="/" className="text-black font-latin">Home</Link>
          <Link href="/about" className="text-black font-latin">About</Link>
          <Link href="/product" className="text-black font-latin">Product</Link>
          <Link href="/contact" className="text-black font-latin">Contact</Link>
        </div>
        <div className="flex items-center gap-4  ">
             <input
        type="text"
        placeholder="What are you looking for?"
        className="flex-1 px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-poppins"
      />
      <CiHeart />
        <FiShoppingCart />

        </div>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
