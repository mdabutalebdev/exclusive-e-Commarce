 
"use client";
import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const CategoryCard = () => {
  const categories = [
    { id: 1, name: "Phones", icon: FaMobileAlt },
    { id: 2, name: "Computers", icon: FaLaptop },
    { id: 3, name: "SmartWatch", icon: FaClock },
    { id: 4, name: "Camera", icon: FaCamera },
    { id: 5, name: "HeadPhones", icon: FaHeadphones },
    { id: 6, name: "Gaming", icon: FaGamepad },
    { id: 7, name: "Gaming", icon: FaGamepad },
    { id: 8, name: "HeadPhones", icon: FaHeadphones },
    { id: 9, name: "Computers", icon: FaLaptop },
    { id: 10, name: "Phones", icon: FaMobileAlt },
    { id: 11, name: "Camera", icon: FaCamera },
  ];

  return (
    <div className="py-12 w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <SwiperSlide key={category.id}>
              <div className="group border border-gray-300 p-6 flex flex-col items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#db4444] rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 transition-all duration-300">
                    <IconComponent className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryCard;
