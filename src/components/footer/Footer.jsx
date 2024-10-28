import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-web pt-16 px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between  ">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-start gap-4 max-w-xs">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-40 h-20 self-center"
          />
          <p className="text-white text-lg font-normal text-justify font-Dm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
          <p className=" text-white text-lg font-medium font-['DM Sans']">
            Social Media
          </p>
          <ul className="flex items-center gap-x-4">
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2 ">
              <img src="/images/social-icons/instagram.svg" alt="" />
            </li>
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2 ">
              <img src="/images/social-icons/whatsapp.svg" alt="" />
            </li>
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2 ">
              <img src="/images/social-icons/facebook.svg" alt="" />
            </li>
          </ul>
        </div>

        {/* Center Section - Navigation Links */}

        <div className="flex flex-col gap-6">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Explore
          </h4>
          <ul className="text-white text-base font-normal font-dm-sans leading-7 space-y-3">
            <li>About</li>
            <li>Solutions</li>
            <li>Team Members</li>
            <li>We Provide</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Links
          </h4>
          <ul className="text-white text-base font-normal font-dm-sans leading-7 space-y-3">
            <li>About Nepal</li>
            <li>How it Works</li>
            <li>My Cart</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex flex-col gap-4 items-start ">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Contact Us
          </h4>
          <div className="text-white font-helvetica space-y-4">
            <p className="text-base">Samakhusi-29, Kathmandu</p>
            <p className="text-base">info@alnooroverseas.com</p>
            <p className="text-base">9806605866</p>
          </div>
          <img
            src="/images/map.png"
            alt="Map"
            className="w-full max-w-xs h-32 object-fit"
          />
        </div>
      </div>

      {/* Footer Divider and Copyright */}
      <div className="border-t border-gray-300/90 mt-8" />
      <div className="h-20 gap-1  justify-center items-center flex text-center text-white text-sm font-normal font-sans">
        <img src="/images/copyright.svg" alt="" />{" "}
        <p>Copyright.2022.All.Rights.Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
