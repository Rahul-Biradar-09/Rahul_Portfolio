import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-center">
      <div className="bg-cover bg-center bg-[url('https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg')] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full text-center text-gray-900">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            I'm always excited to connect with like-minded individuals! Whether
            you're looking to collaborate on a project, discuss the latest tech
            trends, or simply want to share ideas, feel free to reach out. I
            look forward to hearing from you!
          </p>
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-6 sm:mb-8 text-gray-700">
            <a
              href="mailto:rahulbiradar1111@gmail.com"
              aria-label="Email"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/Rahul-Biradar-09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-biradar-371459190/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <p className="text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()} Rahul Biradar. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
