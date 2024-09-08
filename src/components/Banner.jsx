import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-12 lg:px-14 my-20 md:mx-10">
      {/* Left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="mt-6 py-3 bg-white rounded-full px-8 text-gray-600 text-sm s m:text-base hover:scale-105 transition-all duration-300"
        >
          Create account
        </button>
      </div>
      {/* Right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
