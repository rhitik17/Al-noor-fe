import React from "react";

const ProfessionalSupportCard = () => {
  return (
    <div className="w-[96] h-[38] px-6 py-6 bg-white shadow-md border border-black/10 flex flex-col items-start gap-2">
      <div className="w-full h-[24] flex flex-col items-start gap-1">
        {/* Title */}
        <div className="flex w-[84] justify-center items-center gap-2">
          <h2 className="flex-grow text-[#333333] text-3xl font-medium font-inter">Professional Support</h2>
        </div>

        {/* Description */}
        <div className="flex w-full justify-center items-center gap-2">
          <p className="flex-grow text-[#4d4d4d] text-xl font-normal font-inter leading-7">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSupportCard;
