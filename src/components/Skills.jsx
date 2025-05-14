import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaLock
} from 'react-icons/fa';
import {
  SiBootstrap,
  SiExpress,
  SiSqlite,
  SiRedux,
  SiPostman,
  SiTailwindcss
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { name: 'React.js', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Express.js', icon: <SiExpress size={40} /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'SQLite', icon: <SiSqlite size={40} /> },
  { name: 'SQL', icon: <AiOutlineConsoleSql size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
  { name: 'JWT Auth', icon: <FaLock size={40} /> },
  { name: 'React Context', icon: <SiRedux size={40} /> },
  { name: 'React Hooks', icon: <FaReact size={40} /> },
  { name: 'REST API', icon: <SiPostman size={40} /> },
  { name: 'Flexbox', icon: <SiTailwindcss size={40} /> }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-center">
      <div className="bg-cover bg-center bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-2xl max-w-4xl sm:max-w-5xl lg:max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center text-gray-800">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 text-blue-600">{skill.icon}</div>
                <p className="text-sm sm:text-base md:text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
