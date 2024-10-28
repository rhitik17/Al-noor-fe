import React from "react";
import Contactbar from "./Contactbar";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <Contactbar />

      {/* Navbar */}

      <section className="flex justify-between items-center px-20 py-4 shadow">
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <ul className="flex gap-x-3 text-neutral-blue  font-semibold font-inter">
          <li>Home</li>
          <li>Job portal</li>
          <li>Advertise</li>
          <li>We Provide</li>
          <li>About Nepal</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-x-6 ">
          <button className="w-10 h-10  bg-primary-web text-neutral-white rounded justify-center items-center inline-flex">
            <LuSearch />
          </button>
          <button className="h-10 px-3 py-3.5 bg-primary-web text-neutral-white rounded justify-center items-center flex ">
            Login
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
