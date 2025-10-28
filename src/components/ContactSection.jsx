 
'use client';
import { FiPhoneCall, FiMail } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-10">

        {/* Left Side - Contact Info */}
        <div className="bg-white shadow-sm rounded-lg p-8 w-full md:w-1/3 space-y-8">
          {/* Call Section */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#DB4444] text-white p-3 rounded-full">
                <FiPhoneCall size={22} />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">Call To Us</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-700 font-medium text-sm">
              Phone: +8801611112222
            </p>
            <hr className="my-6 border-gray-200" />
          </div>

          {/* Write Section */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#DB4444] text-white p-3 rounded-full">
                <FiMail size={22} />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">Write To Us</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-700 text-sm">Emails: customer@exclusive.com</p>
            <p className="text-gray-700 text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-sm   rounded-lg p-8 w-full md:w-2/3">
          <form className="space-y-6">
            {/* Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:border-[#DB4444]"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3   border border-gray-200 rounded-md focus:outline-none focus:border-[#DB4444]"
                required
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="w-full p-3 border   border-gray-200 rounded-md focus:outline-none focus:border-[#DB4444]"
                required
              />
            </div>

            {/* Message Box */}
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-200 rounded-md text-gray-700 focus:outline-none focus:border-[#DB4444]"
            ></textarea>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#DB4444] text-white font-medium py-3 px-8 rounded-md hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
