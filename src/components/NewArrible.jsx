"use client";

import React from "react";
import Heading from "./shared/Heading";
import Image from "next/image";
import Link from "next/link";

const NewArrible = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-6 md:px-24">
        <Heading title={"Featured"} SectionHead={"New Arrival"} />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Large Image */}
          <div className="w-full lg:w-[750px] relative h-[300px] md:h-[570px]">
            <Image
              src="/images/event_img_one.jpg"
              alt="Summer Collection"
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0  bg-opacity-30"></div>
            <div className="absolute bottom-5 left-5 z-10">
              <h3 className="text-white font-medium text-2xl">Feel the Music</h3>
              <p className="text-white">Awesome watch explore this</p>
              <Link href="/product">
                <button className="mt-2 text-[14px] px-3 py-1 rounded-md bg-[#db4444] text-white">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Medium Image */}
            <div className="relative w-full md:w-[570px] h-[270px]">
              <Image
                src="/images/event_img_two.webp"
                alt="Base Boosting Headphones"
                fill
                sizes="(max-width: 768px) 100vw, 570px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0  bg-opacity-30"></div>
              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-white font-medium text-2xl">Base Boosting Headphones</h3>
                <p className="text-white">Awesome watch explore this</p>
                <Link href="/product">
                  <button className="mt-2 text-[14px] px-3 py-1 rounded-md bg-[#db4444] text-white">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Two Small Images */}
            <div className="flex gap-4">
              {/* Small Image 1 */}
              <div className="relative w-1/2 h-[200px] md:h-[270px]">
                <Image
                  src="/images/event_img_three.webp"
                  alt="Exclusive Watch"
                  fill
                  sizes="(max-width: 768px) 100vw, 270px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0   bg-opacity-30"></div>
                <div className="absolute bottom-5 left-3 z-10">
                  <h3 className="text-white font-medium text-xl">Exclusive Watch</h3>
                  <p className="text-white text-sm">Awesome watch explore this</p>
                  <Link href="/product">
                    <button className="mt-2 text-[14px] px-3 py-1 rounded-md bg-[#db4444] text-white">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Small Image 2 */}
              <div className="relative w-1/2 h-[200px] md:h-[270px]">
                <Image
                  src="/images/event_img_one.jpg"
                  alt="Heabby Bass"
                  fill
                  sizes="(max-width: 768px) 100vw, 270px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0   bg-opacity-30"></div>
                <div className="absolute bottom-5 left-3 z-10">
                  <h3 className="text-white font-medium text-xl">Heabby Bass</h3>
                  <p className="text-white text-sm">Awesome watch explore this</p>
                  <Link href="/product">
                    <button className="mt-2 text-[14px] px-3 py-1 rounded-md bg-[#db4444] text-white">
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
  );
};

export default NewArrible;
