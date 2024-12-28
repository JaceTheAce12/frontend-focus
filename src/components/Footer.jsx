import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import businessLogoWhite from "../assets/businessLogoWhite.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-xl font-bold text-white">
          <a href="/">
              <img src={businessLogoWhite} alt="Brand Logo" className="h-10" />
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-[#6C63FF] hover:text-white transition-colors">
              <FiFacebook className="text-xl" />
            </a>
            <a href="#" className="text-[#6C63FF] hover:text-white transition-colors">
              <FiTwitter className="text-xl" />
            </a>
            <a href="#" className="text-[#6C63FF] hover:text-white transition-colors">
              <FiInstagram className="text-xl" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
