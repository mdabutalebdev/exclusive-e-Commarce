import Image from "next/image";
import React from "react";

const WeProvaideCustomar = () => {
  return (
    <div>
      <div className="container mx-auto px-24 py-20 grid grid-cols-3 gap-6">
        <div className="">
          <Image
            src="/images/event_img_one.jpg"
            alt="Summer Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WeProvaideCustomar;
