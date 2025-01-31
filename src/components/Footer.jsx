import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className=" cursor-pointer hover:text-blue-600">Home</li>
            <li className=" cursor-pointer hover:text-blue-600">About us</li>
            <li className=" cursor-pointer hover:text-blue-600">Contact us</li>
            <li className=" cursor-pointer hover:text-blue-600">
              Privacy policy
            </li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className=" cursor-pointer hover:text-blue-600">
              +92-xxx-xxx-xxxx
            </li>
            <li className=" cursor-pointer hover:text-blue-600">
              softak@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* New Section - Follow Us */}
      <div className="my-10">
        <p className="text-xl font-medium mb-5">FOLLOW US</p>
        <ul className="flex gap-6 text-gray-600">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transform hover:scale-110 hover:text-blue-600 transition-all duration-300"
            >
              <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300"
            >
              <FaTwitter size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transform hover:scale-110 hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transform hover:scale-110 hover:text-blue-700 transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()} @ softak - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
