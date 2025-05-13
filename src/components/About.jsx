import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')]"
    >
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/80 mt-14 backdrop-blur-lg p-6 sm:p-8 md:p-12 lg:p-14 rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl w-full text-center text-gray-900">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            Hi, I'm Rahul Biradar
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            I'm a Full Stack Developer specializing in the <strong>MERN stack</strong>. I craft responsive, scalable, and user-friendly web applications with a strong focus on performance, clean code, and seamless user experiences. Passionate about building modern solutions that solve real-world problems through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

