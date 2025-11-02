'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const SimpleTeamSlider = () => {
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
    },
    {
      id: 4,
      name: "Md Abu Taleb Khan",
      position: "Founder & CEO",
      company: "in",
      image: "/images/ceo.jpg"
    },
    {
      id: 5,
      name: "Emma Watson",
      position: "Managing Director",
      company: "in",
      image: "/images/team_one.png"
    },
    {
      id: 6,
      name: "Will Smith",
      position: "Product Designer",
      company: "in",
      image: "/images/team_two.png"
    }
  ];

  return (
    <div className="bg-gray-50 lg:py-16 lg:px-4">
      <div className="container mx-auto lg:px-24">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // default for mobile
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },   // Mobile: 1 per view
            768: { slidesPerView: 2 },   // Tablet: 2 per view
            1024: { slidesPerView: 3 },  // Desktop: 3 per view
          }}
          className="pb-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="my-10 bg-white w-[320px] h-[465px] shadow-md text-center transition-all duration-300 rounded-xl mx-auto">
                <div className="relative w-full h-72 rounded-t-xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain pt-5"
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
