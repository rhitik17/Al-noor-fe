import React from "react";

const LatestNews = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-[864px] bg-white mx-auto">
      {/* Main Content */}
      <div className="absolute left-[5.2%] top-[6.5%] h-[752px] flex flex-col gap-24">
        
        {/* Title Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#e3383a] text-2xl font-bold font-inter">Latest News</h2>
          <h3 className="text-[#158448] text-5xl font-bold font-inter">
            Read the latest news from the world
          </h3>
          <p className="text-[#333333] text-lg font-normal font-inter leading-[1.875rem]">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        
        {/* News Cards */}
        <div className="flex gap-10">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-[397px] h-[484px] relative">
              {/* Image and Overlay */}
              <div className="relative w-full h-[294.69px] bg-[#8d8e8d]">
                <img
                  src="https://via.placeholder.com/450x412"
                  alt="News Thumbnail"
                  className="absolute top-[-22px] left-[-26px] w-[450px] h-[411.67px]"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
              
              {/* Card Bottom Section */}
              <div className="relative w-full h-[189.31px] bg-white border border-black/20">
                <div className="absolute inset-x-[6%] top-[15%] space-y-1">
                  <div className="text-[#666666] text-base font-medium font-inter flex justify-between items-center">
                    <span>Creative Design</span>
                    <span className="text-sm">20/08/2020</span>
                  </div>
                  <h4 className="text-[#333333] text-xl font-medium font-inter leading-7">
                    It is a long established fact that a reader will be distracted
                  </h4>
                  <p className="text-[#4d4d4d] text-sm font-normal font-inter">
                    There are many variations of passages of Lorem Ipsum available, but the majority h....
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-[10%] top-[30%] w-[178px] flex items-center justify-between">
        <span className="text-black text-sm font-medium">PREV</span>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-0.5 bg-[#808080]"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
        <span className="text-[#808080] text-sm font-medium">NEXT</span>
      </div>
    </div>
  );
};

export default LatestNews;
