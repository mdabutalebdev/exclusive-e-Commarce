"use client";
import React from "react";
import Image from "next/image";
import CountdownTimer from "./shared/CountdownTimer";
import Link from "next/link";

const EventBanner = () => {
  return (
    <div className="py-5 bg-gray-50">
      <div className="relative w-full max-w-[1370px] mx-auto h-[300px] md:h-[500px]">
        <Image
          src="/images/event_banner.jpg"
          alt="Summer Collection"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0   bg-opacity-30"></div>

        <div className="relative z-10 text-left text-white px-4 md:px-16 pt-10 md:pt-20 max-w-xl">
          <p className="text-[#00FF66] pl-1 text-sm md:text-base">Categories</p>
          <h1 className="text-2xl md:text-5xl font-medium mb-4 py-2">
            Enhance Your Music Experience
          </h1>

          <div className="my-3">
            <CountdownTimer targetDate={new Date("2026-01-01T00:00:00")} />
          </div>

          <Link href="/product">
            <button className="bg-[#00FF66] text-white font-medium px-6 py-3 rounded-lg mt-5 transition cursor-pointer text-sm md:text-base">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
