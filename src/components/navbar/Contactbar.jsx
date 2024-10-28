import React from "react";

const Contactbar = () => {
  return (
    <>
      <section className="w-full h-10 bg-primary-web flex justify-between items-center px-20  ">
        <ul className="flex text-white text-base  gap-x-5 font-geologica">
          <li className="flex gap-x-1 "><img src="/phone.svg" alt="" />+977-1-4383094</li>
          <li className="flex gap-x-1 "><img src="/mail.svg" alt="" />info@alnooroverseas.com</li>
          <li className="flex gap-x-1 "><img src="/location.svg" alt="" />Samakhusi, Kathmandu</li>
        </ul>

        <ul className="flex items-center gap-x-3">
          <li><img src="/public/facebook.svg" alt="" /></li>
          <li><img src="/google_plus.svg" alt="" /></li>
          <li><img src="/instagram.svg" alt="" /></li>
          <li><img src="twitter.svg" alt="" /></li>
        </ul>
      </section>
    </>
  );
};

export default Contactbar;
