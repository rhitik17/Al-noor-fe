import React from "react";

const Contactbar = () => {
  return (
    <>
      <section className="w-full h-10 bg-primary-web flex justify-between items-center px-20  ">
        <ul className="flex text-white text-base  gap-x-5 font-geologica">
          <li className="flex gap-x-1 "><img src="/images/phone.svg" alt="" />+977-1-4383094</li>
          <li className="flex gap-x-1 "><img src="/images/mail.svg" alt="" />info@alnooroverseas.com</li>
          <li className="flex gap-x-1 "><img src="/images/location.svg" alt="" />Samakhusi, Kathmandu</li>
        </ul>

        <ul className="flex items-center gap-x-3">
          <li><img src="/images/social-icons/facebook.svg" alt="" /></li>
          <li><img src="/images/social-icons/google_plus.svg" alt="" /></li>
          <li><img src="/images/social-icons/instagram.svg" alt="" /></li>
          <li><img src="/images/social-icons/twitter.svg" alt="" /></li>
        </ul>
      </section>
    </>
  );
};

export default Contactbar;
