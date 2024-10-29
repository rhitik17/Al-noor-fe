import React from "react";

const JobSearchSection = () => {
  return (
    <div className="w-full max-w-[1174px] h-36 px-7 py-7 bg-white rounded-2xl shadow-lg flex flex-col items-start gap-2.5">
      {/* Container for Job Search Inputs */}
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-12.5">
          {/* Job Search Input */}
          <div className="relative w-[670px] h-[74px]">
            <div className="absolute w-full h-12 top-6 rounded-full border border-[#e4d4ca]" />
            <div className="absolute top-9 right-4 w-6 h-6" />
            <div className="absolute top-9 left-4 w-6 h-6">
              <div className="relative w-[12.78px] h-[17.70px] top-[3.6px] left-[5.61px]" />
            </div>
            <span className="absolute top-0 left-4 text-[#444444] text-base font-medium font-inter">Job Search</span>
          </div>

          {/* City, Country Input */}
          <div className="relative w-[275px] h-[74px]">
            <div className="absolute w-full h-12 top-6 rounded-full border border-[#e4d4ca]" />
            <div className="absolute top-9 right-3 w-6 h-6" />
            <span className="absolute top-10 left-14 text-[#e4d4ca] text-sm font-normal font-lato">Bali, Indonesia</span>
            <div className="absolute top-9 left-5 w-6 h-6">
              <div className="relative w-[12.78px] h-[17.7px] top-[3.6px] left-[5.61px]" />
            </div>
            <span className="absolute top-0 left-5 text-[#444444] text-base font-medium font-inter">City, Country</span>
          </div>

          {/* Search Button */}
          <button className="relative w-[74px] h-[74px] bg-[#4a6870] rounded-lg flex justify-center items-center">
            <div className="w-[34px] h-[34px] rounded-lg" />
          </button>
        </div>

        {/* Bottom Border Line */}
        <div className="w-32 border-4 border-[#4a6870]" />
      </div>
    </div>
  );
};

export default JobSearchSection;
