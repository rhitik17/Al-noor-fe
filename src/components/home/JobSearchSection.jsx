import React from "react";
import { LuSearch } from "react-icons/lu";

const JobSearchSection = () => {
  return (
    <div className="w-full max-w-[1174px] h-36 px-7 py-7 bg-white rounded-2xl shadow-lg flex flex-col items-start gap-2.5">
      {/* Container for Job Search Inputs */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center gap-10">
          {/* Job Search Input */}
          <div className=" w-[670px]">
          <span className="  text-neutral-black  font-medium font-inter pl-4">Job Search</span>

            <input
              type="text"
              placeholder="Job Search"
              className="w-full h-12 px-4 rounded-full border border-neutral-lightGray text-base font-medium"
            />
          </div>

          {/* City, Country Input */}
          <div className=" w-[275px]">
              <span className="   text-neutral-black  font-medium font-inter pl-4">City, Country</span>
            <input
              type="text"
              placeholder=" Bali, Indonesia"
              className="w-full h-12 px-4 rounded-full border border-neutral-lightGray text-base font-medium"
            />
          </div>

          {/* Search Button */}
          <button className="w-[74px] h-[74px] bg-[#4a6870] rounded-lg flex justify-center items-center">
         <img src="/images/search.svg" alt="" />
          </button>
        </div>

        {/* Bottom Border Line */}
        <div className="w-32 border-4 border-[#4a6870]" />
      </div>
    </div>
  );
};

export default JobSearchSection;
