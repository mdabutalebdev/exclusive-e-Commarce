import React from "react";
import Heading from "./shared/Heading";
import Image from "next/image";
import Link from "next/link";

const NewArrible = () => {
  return (
    <div>
      <div className="container mx-auto px-24">
        <Heading title={"Featured"} SectionHead={"New Arrival"} />
     

      <div className="flex items-center justify-center gap-6">
        <div className="">
          <div className="py-5 bg-gray-50">
            <div className="relative  w-[750px] mx-auto h-[300px] md:h-[585px]">
              <Image
                src="/images/event_img_one.jpg"
                alt="Summer Collection"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0   bg-opacity-30"></div>

             <div className="relative z-10 pt-[450px] pl-5">
                  <h3 className="text-white font-medium text-2xl">
                    Feel the Music
                  </h3>
                  <p className="text-white">Awsome watch elplore This</p>
              
                  <Link href="#">
                  <button className="text-[14px] px-2 rounded-md bg-[#db4444] pb-1 text-white mt-2 cursor-pointer">
                    Shop Now
                  </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="py-5 bg-gray-50">
              <div className="relative  w-[570px] mx-auto h-[300px] md:h-[270px]">
                <Image
                  src="/images/event_img_two.webp"
                  alt="Summer Collection"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0  bg-opacity-30"></div>

               <div className="relative z-10 pt-40 pl-5">
                  <h3 className="text-white font-medium text-2xl">
                    Base Boosting Headphones
                  </h3>
                  <p className="text-white">Awsome watch elplore This</p>
              
                  <Link href="#">
                  <button className="text-[14px] px-2 rounded-md bg-[#db4444] pb-1 text-white mt-2 cursor-pointer">
                    Shop Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="py-5 bg-gray-50">
              <div className="relative  w-[270px] mx-auto h-[200px] md:h-[270px]">
                <Image
                  src="/images/event_img_three.webp"
                  alt="Summer Collection"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0  bg-opacity-30"></div>
                <div className="relative z-10 pt-40 pl-5">
                  <h3 className="text-white font-medium text-2xl">
                    Exclusive Watch
                  </h3>
                  <p className="text-white">Awsome watch elplore This</p>
              
                  <Link href="#">
                  <button className="text-[14px] px-2 rounded-md bg-[#db4444] pb-1 text-white mt-2 cursor-pointer">
                    Shop Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p bg-gray-50">
              <div className="relative  w-[270px] mx-auto h-[200px] md:h-[270px]">
                <Image
                  src="/images/event_img_one.jpg"
                  alt="Summer Collection"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0   bg-opacity-30"></div>

                <div className="relative z-10 pt-40 pl-5">
                  <h3 className="text-white font-medium text-2xl">
                    Heabby Bass
                  </h3>
                  <p className="text-white">Awsome watch elplore This</p>
              
                  <Link href="#">
                  <button className="text-[14px] px-2 rounded-md bg-[#db4444] pb-1 text-white mt-2 cursor-pointer">
                    Shop Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default NewArrible;
