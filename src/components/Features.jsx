import React from "react";
import { FiActivity, FiShield, FiUserCheck } from "react-icons/fi"; // Example icons

const Features = () => {
  const features = [
    {
      icon: <FiActivity className="text-[#6C63FF] text-4xl" />,
      title: "Fast Performance",
      description:
        "Experience blazing fast speeds with our optimized technology.",
    },
    {
      icon: <FiShield className="text-[#6C63FF] text-4xl" />,
      title: "Top-notch Security",
      description:
        "Your data is protected with industry-leading security measures.",
    },
    {
      icon: <FiUserCheck className="text-[#6C63FF] text-4xl" />,
      title: "User-Friendly",
      description:
        "Enjoy an intuitive interface designed for seamless interaction.",
    },
  ];

  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto text-center px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800">Our Features</h2>
        <p className="text-gray-600 mt-4">
          Discover the powerful features that make our platform exceptional.
        </p>

        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
