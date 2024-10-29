import React from "react";

const AboutCard = () => {
  return (
    <div className="w-[437px] h-[257px] flex flex-col justify-start items-start gap-10">
      <div className="w-full flex flex-col items-end gap-2">
        {/* Title Section */}
        <div className="w-full flex flex-col items-start gap-3">
          <div className="text-[#e12b2d] text-2xl font-bold font-inter">About</div>
          <div className="text-[#158448] text-5xl font-bold font-roboto">Al Noor Overseas</div>
        </div>

        {/* Description Section */}
        <p className="w-full text-[#333333] text-lg font-normal font-roboto leading-7">
          It is a long established fact that a reader will be<br />
          distracted by the readable content of a page.
        </p>
      </div>

      {/* Button Section */}
      <div className="w-44 h-12 bg-[#158448] flex items-center justify-center rounded-md">
        <span className="text-white text-xl font-bold font-roboto">Explore</span>
      </div>
    </div>
  );
};

export default AboutCard;
