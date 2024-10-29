import React from "react";

const SucessStories = () => {
  return (
    <div className="w-full h-[578px] px-20 py-20 bg-green-700 flex justify-center items-center">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">Success Stories</h2>
            <h3 className="text-white text-5xl font-bold">
              Read the latest news from the world
            </h3>
          </div>
          <p className="text-white text-base font-normal max-w-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative flex gap-8">
          <div className="w-96 h-52 p-8 bg-white shadow-lg flex flex-col gap-6">
            <p className="text-gray-700 text-sm leading-snug">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="flex items-center gap-5">
              <img
                className="w-14 h-14 rounded-full"
                src="https://via.placeholder.com/56x56"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 text-base font-semibold">
                  Jerome Bell
                </span>
                <span className="text-gray-700 text-sm">
                  Marketing Coordinator
                </span>
              </div>
            </div>
          </div>
          <div className="w-96 h-52 p-8 bg-white shadow-lg flex flex-col gap-6">
            <p className="text-gray-700 text-sm leading-snug">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="flex items-center gap-5">
              <img
                className="w-14 h-14 rounded-full"
                src="https://via.placeholder.com/56x56"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 text-xl font-semibold">
                  Cody Fisher
                </span>
                <span className="text-gray-700 text-sm">
                  President of Sales
                </span>
              </div>
            </div>
          </div>
          <div className="w-96 h-52 p-8 bg-white shadow-lg flex flex-col gap-6">
            <p className="text-gray-700 text-sm leading-snug">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="flex items-center gap-5">
              <img
                className="w-14 h-14 rounded-full"
                src="https://via.placeholder.com/56x56"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 text-base font-semibold">
                  Robert Fox
                </span>
                <span className="text-gray-700 text-sm">Web Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucessStories;
