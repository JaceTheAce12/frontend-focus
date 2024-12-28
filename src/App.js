import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-['Poppins']">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
