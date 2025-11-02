"use client";
import Heading from "./shared/Heading";
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

const BestSeling = () => {
  const products = useSelector((state) => state.products);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (products.loading) {
    return <div className="flex justify-center py-10">Loading...</div>;
  }

  return (
    <div className="pb-5 bg-gray-50">
      <div className="container mx-auto px-4 md:px-24">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <Heading title={"This Month"} SectionHead={"Best Selling Products"} />
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

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center mb-2">
          <Heading title={"This Month"} SectionHead={"Best Selling Products"} />
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

        {/* Swiper */}
        <div className="py-4">
          {products.items && products.items.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 9 },
                640: { slidesPerView: 2, spaceBetween: 12 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 5, spaceBetween: 20 },
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

export default BestSeling;
