import React from "react";
import heroIllustration from "../assets/heroIllustration.svg";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0 max-w-6xl">
        
        <div className="text-center md:text-left max-w-lg mt-4 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Your Dreams with <span className="text-[#6C63FF]">Confidence</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Our platform provides the tools you need to achieve your goals, with ease and efficiency.
          </p>
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-white bg-[#6C63FF] hover:bg-[#5b53fd] rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 text-black bg-white border border-[#6C63FF] hover:bg-[#8b85ff] hover:text-white rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="max-w-lg">
          <img
            src={heroIllustration}
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
