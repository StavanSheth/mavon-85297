import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import logo from "./assets/mavon-logo.jpg"; // ✅ correct file name & path

// ✅ Hero Section
const Hero: React.FC = () => {
  const icons = [
    { emoji: "💡", label: "Solutions", link: "#solutions" },
    { emoji: "🧰", label: "Services", link: "#services" },
    { emoji: "👥", label: "About", link: "#about" },
    { emoji: "📞", label: "Contact", link: "#contact" },
  ];

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      {/* Revolving Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute w-72 h-72 rounded-full flex items-center justify-center"
      >
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl cursor-pointer select-none"
            style={{
              transform: `rotate(${i * 90}deg) translate(10rem) rotate(-${i * 90}deg)`,
            }}
            whileHover={{ scale: 1.3 }}
          >
            <Link smooth to={icon.link} title={icon.label}>
              {icon.emoji}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Logo */}
      <motion.img
        src={logo}
        alt="Mavon Logo"
        className="w-32 h-32 rounded-full shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <h1 className="text-3xl mt-10 font-semibold text-center tracking-wide">
        Welcome to <span className="text-green-400">Mavon</span>
      </h1>
    </section>
  );
};

// ✅ Section Blocks
const Solutions = () => (
  <section id="solutions" className="py-24 bg-gray-900 text-white text-center">
    <h2 className="text-4xl font-semibold mb-4">💡 Solutions</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      We offer cutting-edge solutions tailored to your business needs — from automation to analytics.
    </p>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-gray-800 text-white text-center">
    <h2 className="text-4xl font-semibold mb-4">🧰 Services</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Mavon provides software development, AI solutions, and digital design services.
    </p>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-gray-900 text-white text-center">
    <h2 className="text-4xl font-semibold mb-4">👥 About Us</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Mavon is a forward-thinking tech company focused on innovation and sustainable impact.
    </p>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-800 text-white text-center">
    <h2 className="text-4xl font-semibold mb-4">📞 Contact Us</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Get in touch with us at{" "}
      <a href="mailto:info@mavon.com" className="text-green-400 underline">
        info@mavon.com
      </a>
    </p>
  </section>
);

// ✅ Main App
const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default App;
