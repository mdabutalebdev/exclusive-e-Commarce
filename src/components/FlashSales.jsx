"use client";
import Heading from "./shared/Heading";
import CountdownTimer from "./shared/CountdownTimer";
import { useSelector } from "react-redux";
import ProductCard from "./shared/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import Button from "./shared/Button";
import Link from "next/link";

const FlashSales = () => {
  const products = useSelector((state) => state.products);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (products.loading) {
    return <div className="flex justify-center py-10">Loading...</div>;
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-24">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center flex-wrap gap-4">
          <Heading title={"Todays"} SectionHead={"Flash Sales"} />
          <div className="flex items-center gap-4">
            <CountdownTimer targetDate={new Date("2026-01-01T00:00:00")} />
            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                className="bg-gray-300 text-white p-2 rounded hover:bg-[#DB4444] transition"
              >
                <AiOutlineLeft size={20} />
              </button>
              <button
                ref={nextRef}
                className="bg-gray-300 text-white p-2 rounded hover:bg-[#DB4444] transition"
              >
                <AiOutlineRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <Heading title={"Todays"} SectionHead={"Flash Sales"} />
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="bg-gray-300 text-white p-2 rounded hover:bg-[#DB4444] transition"
            >
              <AiOutlineLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="bg-gray-300 text-white p-2 rounded hover:bg-[#DB4444] transition"
            >
              <AiOutlineRight size={20} />
            </button>
          </div>
        </div>

        {/* Countdown Timer (mobile & desktop) */}
        <div className="flex justify-start md:hidden ml-5 md:justify-start mb-4">
          <CountdownTimer targetDate={new Date("2026-01-01T00:00:00")} />
        </div>

        {/* Swiper */}
        <div className="py-2 lg:pt-10">
          {products.items && products.items.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 2,spaceBetween: 9},
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
            >
              {products.items.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex justify-center items-center py-10">
              No Products Available
            </div>
          )}
        </div>

        {/* View All Button */}
        <Link href="/product">
          <div className="flex justify-center mt-6">
            <Button className="cursor-pointer !py-3">View All Products</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;
