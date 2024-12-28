import React, { useState } from "react";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="bg-indigo-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-indigo-200">
            Have questions or feedback? Drop us a message, and we’ll get back to you!
          </p>
        </div>

        {formSubmitted ? (
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-700">Thank you!</h3>
            <p className="mt-4 text-gray-600">We have received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-md shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;