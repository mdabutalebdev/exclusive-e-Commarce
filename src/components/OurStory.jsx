import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div>
      <div className=" container mx-auto px-24 py-16">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-4xl font-semibold pb-5">Our Story</h3>
            <p className="w-[600px] text-base font-normal pb-4">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="w-[600px] text-base font-normal">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/about_img.png"
              height={200}
              width={500}
              alt="Our Story Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
