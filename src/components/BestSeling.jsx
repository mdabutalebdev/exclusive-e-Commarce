 
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

const BestSeling = () => {
  const products = useSelector((state) => state.products);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

if (products.loading) {
  return <div className="flex justify-center">Loading...</div>;
}

  return (
    <div className="pb-5 bg-gray-50 ">
      <div className="container mx-auto px-24  ">
        {/* Heading + Custom Arrows Flex */}
        <div className="flex justify-between items-center ">
          <Heading title={"This Month"} SectionHead={"Best Selling Products"} />

          {/* Custom Nav Buttons in flex with Heading */}
         
            
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

        <div className="pb-10 pt-10">
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
              1280: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {products.items.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center items-center">
            No Products Available
          </div>
        )}
        </div>
       <Link href="/product" className="">
        <div className="flex justify-center">
          <Button className="cursor-pointer !py-3">
            View All Products
          </Button>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default BestSeling;

