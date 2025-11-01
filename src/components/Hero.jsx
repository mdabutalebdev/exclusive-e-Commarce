"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./shared/Button";
import { useRouter } from "next/navigation"; // Next.js routing
import ExploreAllProduct from "../components/ExploreAllProduct"
const Hero = () => {
  const router = useRouter();

  const slides = [
    {
      image: "/images/banner_two.webp",
      title: "Immerse Yourself in Brilliance",
      desc: "Experience lifelike visuals and cinematic sound with the all-new 75″ 4K Ultra Vision TV — where every scene feels real.",
      link: "/product", // প্রথম banner এর link
    },
    {
      image: "/images/banner_one.jpg",
      title: "iPhone 17 Pro — Power Beyond Limits",
      desc: "Experience next-gen performance with the A19 Bionic chip, stunning ProMotion display, and a design that redefines premium.",
      link: "/product", // দ্বিতীয় banner এর link
    },
    {
      image: "/images/banner-five.jpg",
      title: "Power Meets Elegance",
      desc: "Experience lightning-fast performance and sleek design with the new MacBook — built for creators, dreamers, and doers.",
      link: "/product", // তৃতীয় banner এর link
    },
  ];

  return (
    <div className="relative w-full min-h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative bg-cover bg-center bg-no-repeat min-h-[65vh] flex items-center px-8 md:px-16"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content - left aligned */}
              <div className="relative z-10 max-w-2xl ml-14 text-left text-white">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200">
                  {slide.desc}
                </p>
                <Button
                  className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg cursor-pointer"
                  onClick={() => router.push(slide.link)}
                >
                  Shop Now
                </Button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
