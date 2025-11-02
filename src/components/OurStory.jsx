import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-16 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold pb-5">Our Story</h3>
            <p className="text-base md:text-lg font-normal pb-4">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              a wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 million
              customers across the region.
            </p>
            <p className="text-base md:text-lg font-normal">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in categories
              ranging from consumer goods to electronics.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/about_img.png"
              height={250}
              width={500}
              alt="Our Story Image"
              className="rounded-md object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurStory;
