import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full  h-[649px] bg-gradient-to-r from-[#00234c] to-[#00234c] rounded-3xl relative">
      {/* Heading Section */}
      <div className="absolute left-36 top-44 flex flex-col items-center gap-4">
        <div className="text-center text-white">
          <h2 className="text-4xl font-semibold font-inter">Connecting Exceptional Talent with Global Opportunities</h2>
          <h1 className="text-6xl font-normal font-inter uppercase mt-1">Live & Travel</h1>
        </div>
        <p className="text-xl font-semibold font-montserrat text-white">
          Special offers to suit your plan
        </p>
      </div>

      {/* Explore Service Button */}
      <div className="absolute left-[649px] top-[379px] flex items-center gap-2 p-2.5 rounded-lg border border-white">
        <span className="text-base font-semibold font-inter text-white">Explore Service</span>
        <div className="w-4.5 h-4.5 flex justify-center items-center">
          <div className="icon-outline-arrow-right" />
        </div>
      </div>

      {/* Discover More Button */}
      <button className="absolute left-[480px] top-[377px] w-[153px] h-[47px] px-5 py-4 bg-[#218b53] rounded-lg flex justify-center items-center text-white text-base font-semibold font-inter">
        Discover More
      </button>
    </div>
  );
};

export default HeroSection;
