import React from "react";

const projects = [
  {
    title: "Todo Application",
    description: `A responsive task manager with full CRUD operations using HTML, CSS, JavaScript, and Bootstrap. Data persists with Local Storage, allowing dynamic updates without page reload.`,
    image: "https://t4.ftcdn.net/jpg/02/42/79/15/360_F_242791586_qkCFcop5qIbmhAZYX7lpAUEWU03GfIFL.jpg",
    link: "https://rahultodosjs1.ccbp.tech",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage API"],
  },
  {
    title: "Jobby Application",
    description: `A React-based job portal with Node.js and Express.js backend. Includes JWT authentication, search, filters, and persistent login. Built with reusable components and RESTful APIs.`,
    image: "https://media.istockphoto.com/id/1394701218/photo/job-search-concept-find-your-career-woman-looking-at-online-website-by-laptop-computer-people.jpg?s=612x612&w=0&k=20&c=V32cT3dAoI7plQSnV-i7YxP43YvaoyA0jLS4729gNWM=",
    link: "https://rahul010.ccbp.tech",
    tech: ["React", "Node.js", "Express.js", "JWT", "REST API", "Flexbox"],
  },
  {
    title: "Nxt Trendz (E-commerce Clone)",
    description: `A full-stack e-commerce app inspired by Amazon/Flipkart. Features include JWT-based login, React Context for state management, and dynamic product display with filtering and search.`,
    image: "https://blog.shift4shop.com/hubfs/iStock-1051616786.jpg",
    link: "https://rahul003.ccbp.tech",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "JWT",
      "React Context",
      "REST API",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-center">
      <div className="bg-cover bg-center bg-[url('https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg')] min-h-screen px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-2xl max-w-4xl sm:max-w-5xl lg:max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={`${project.title} user interface screenshot`}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center text-gray-900">
                    {project.title}
                  </h3>
                  <div className="bg-gray-100 p-3 sm:p-4 rounded mb-3 sm:mb-4">
                    <p className="text-gray-700 text-xs sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 bg-gray-50 p-2 rounded">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded hover:bg-blue-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium block text-center"
                    aria-label={`View the ${project.title} project`}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
