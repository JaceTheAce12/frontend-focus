import React from "react";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "This platform has revolutionized the way I work. It's intuitive and efficient!",
      image: testimonial1,
    },
    {
      name: "John Smith",
      feedback:
        "The user experience is unmatched. I recommend it to everyone I know.",
      image: testimonial2,
    },
    {
      name: "Emily Johnson",
      feedback:
        "I love how easy it is to get started. The support team is fantastic too!",
      image: testimonial3,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-600 mt-4">
          Hear from some of our happy customers who have achieved amazing
          results.
        </p>

        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="mt-2 text-gray-600">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
