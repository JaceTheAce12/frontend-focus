import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import businessLogo from "../assets/businessLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
        
        <div className="text-xl font-bold text-gray-800">
          <a href="/">
            <img src={businessLogo} alt="Logo" className="h-14" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 font-bold hover:text-[#6C63FF] transition duration-300 ease-in-out">
            Home
          </a>
          <a href="#features" className="text-gray-600 font-bold hover:text-[#6C63FF] transition duration-300 ease-in-out">
            Features
          </a>
          <a href="#contact" className="text-gray-600 font-bold hover:text-[#6C63FF] transition duration-300 ease-in-out">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-gray-600 font-bold hover:text-[#6C63FF] hover:bg-gray-200 transition duration-300 ease-in-out px-4 py-2 rounded-md">
              Home
            </a>
            <a href="#features" className="text-gray-600 font-bold hover:text-[#6C63FF] hover:bg-gray-200 transition duration-300 ease-in-out px-4 py-2 rounded-md">
              Features
            </a>
            <a href="#contact" className="text-gray-600 font-bold hover:text-[#6C63FF] hover:bg-gray-200 transition duration-300 ease-in-out px-4 py-2 rounded-md">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;