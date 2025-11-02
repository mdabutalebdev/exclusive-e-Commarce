import Image from "next/image";
import React from "react";

const WeProvaideCustomar = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div>
            <div className="flex justify-center">
              <Image
                src="/images/delivary.png"
                alt="Delivery"
                width={100}
                height={100}
                className="h-18 w-18 object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium mt-4 mb-2">
              FREE AND FAST DELIVERY
            </h2>
            <p className="text-gray-600 mb-6">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="flex justify-center">
              <Image
                src="/images/suport.png"
                alt="Support"
                width={100}
                height={100}
                className="h-18 w-18 object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium mt-4 mb-2">
              24/7 CUSTOMER SERVICE
            </h2>
            <p className="text-gray-600 mb-6">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="flex justify-center">
              <Image
                src="/images/moneybag.png"
                alt="Money Bag"
                width={100}
                height={100}
                className="h-18 w-18 object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium mt-4 mb-2">
              MONEY BACK GUARANTEE
            </h2>
            <p className="text-gray-600 mb-6">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeProvaideCustomar;
