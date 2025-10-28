'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SimpleTeamSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Md Abu Taleb Khan",
      position: "Founder & CEO",
      company: "in",
      image: "/images/ceo.jpg"
    },
    {
      id: 2,
      name: "Emma Watson",
      position: "Managing Director",
      company: "in",
      image: "/images/team_one.png"
    },
    {
      id: 3,
      name: "Will Smith",
      position: "Product Designer",
      company: "in",
      image: "/images/team_two.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto px-24">

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end mb-6 gap-3">
          <button ref={prevRef} className="bg-gray-300 p-2 rounded hover:bg-[#DB4444] transition text-white">Prev</button>
          <button ref={nextRef} className="bg-gray-300 p-2 rounded hover:bg-[#DB4444] transition text-white">Next</button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white w-[320px] h-[465px] shadow-md text-center   transition-all duration-300">
                <div className="relative w-full h-72 rounded-t-xl mx-auto mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain pt-5 "
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-1">{member.position}</p>
                <div className="text-sm text-gray-500 mb-4">{member.company}</div>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#DB4444]"><FaLinkedin className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-[#DB4444]"><FaTwitter className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-[#DB4444]"><FaInstagram className="w-5 h-5" /></a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleTeamSlider;
