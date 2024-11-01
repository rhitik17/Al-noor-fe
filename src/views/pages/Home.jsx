import React from "react";
import HeroSection from "../../components/home/Hero";
import JobSearchSection from "../../components/home/JobSearchSection";
import ProfessionalSupportCard from "../../components/home/SupportCard";
import AboutCard from "../../components/home/AboutCard";
import LatestNews from "../../components/home/Latestnews";
import SucessStories from "../../components/home/SucessStories";

const Home = () => {
  const supports = [
    {
      title: "Professional Support",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      title: "Technical Support",
      description:
        "Our technical support team is available 24/7 to assist you with any issues.",
    },
    {
      title: "Customer Support",
      description:
        "We provide comprehensive customer support to ensure your satisfaction.",
    },
  ];

  return (
    <>
      <section className="py-16">
        <div className="px-20  flex flex-col items-center">

          {/* hero-section with job search */}
          <div className=" mb-20 w-full relative  ">
            <HeroSection />
            <div className="w-full absolute bottom-[-10%] flex items-center justify-center">
              <JobSearchSection />
            </div>
          </div>

{/* Professional card and about card */}
          <div className="w-full mt-12 py-24 flex items-center justify-between gap-24 ">
            <div className="w-9/12 space-y-20 ">
              {supports.map((support, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 1 ? "justify-end" : "justify-start"
                  }`}
                >
                  <ProfessionalSupportCard
                    index={index}
                    title={support.title}
                    description={support.description}
                  />
                </div>
              ))}
            </div>
            <div className="">
              <AboutCard />
            </div>
          </div>

          {/* latest news cards */}
          <LatestNews />
        </div>
        <SucessStories />
        <div className="h-96"></div>
      </section>
    </>
  );
};

export default Home;
