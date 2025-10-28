import React from "react";

const Heading = ({ title, SectionHead }) => {
  return (
    <div>
      <div className="border-l-16 rounded  h-10 w-50 text-2xl text-[#DB4444]  border-[#DB4444] ">
        <p className="pt-2 pl-2 text-base font-semibold"> {title}</p>
      </div>
      <h3 className="font-semibold text-4xl text-black pt-3">{SectionHead}</h3>
    </div>
  );
};

export default Heading;
