import React from "react";
import Image from "next/image";
import CountdownTimer from "./shared/CountdownTimer";
import Link from "next/link";

const EventBanner = () => {
  return (
    <div className="py-5 bg-gray-50">
      <div className="relative  w-[1370px] mx-auto h-[400px] md:h-[500px]">
        <Image
          src="/images/event_banner.jpg"
          alt="Summer Collection"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0   bg-opacity-30"></div>

        <div className="relative z-10 text-left text-white px-6 md:px-16 max-w-xl pt-20">
          <p className="text-[#00FF66] pl-1">Categories</p>
          <h1 className="text-3xl md:text-5xl font-medium mb-4 py-2">
            Enhance Your Music Experience
          </h1>
          
            <CountdownTimer targetDate={new Date("2026-01-01T00:00:00")} />
         
          <Link href="/product">
          <button className="bg-[#00FF66] text-white font-medium px-6 py-3 rounded-lg mt-5  transition cursor-pointer">
            Explore Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
