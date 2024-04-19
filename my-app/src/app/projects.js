import React from 'react';
const projects = [

  {
    name: "SortMaster - Interactive Sorting Algorithm",
    description: "Front-end development: HTML, CSS, JavaScript. Implemented & optimized sorting algorithms. User-centric design, interactive UX/UI.",
    imageUrl: "/sortmaster.png",
    viewLink: "https://sortmaster3.000webhostapp.com/ ",
    codeLink: "https://github.com/alice-moradiya/SortMaster"
  },
  {
    name: "Travel-agency-website",
    description: "Full-stack-project. Backend integration: PHP, MySQL for dynamic content management. Developed secure admin login, tour addition functionality. Implemented robust database design for tour information storage.",
    imageUrl: "/travelage.png",
    // viewLink: "#",
    codeLink: "https://github.com/alice-moradiya/IT-310-Travel-agency-website"
  },

  {
    name: "React.js Project",
    description: "Built with React.js: State management, component-based architecture.Designed for functionality: Custom hooks, event handling. UI/UX focus: Responsive design, interactive elements.",
    imageUrl: "/reactpro2.png",
    viewLink: "https://calculator2221.000webhostapp.com/",
    codeLink: "https://github.com/alice-moradiya/React.js-project"
  },
  {
    name: "Course-registration-system",
    description: "Python; Comprehensive system using python programming techniques. interface for easy navigation and registration process for students",
    imageUrl: "/coursereg.png",
    // viewLink: "#",
    codeLink: "https://github.com/alice-moradiya/Course-registration-system"
  },
  {
    name: "Restaurant Website",
    description: "Front-end development: Bootstrap, jQuery, CSS for responsive design. Crafted engaging UI/UX: Menu navigation, customer testimonials. Implemented dynamic content: Photo sliders, interactive menus.",
    imageUrl: "/restweb.png",
    viewLink: "https://poutineparadise.000webhostapp.com/ ",
    codeLink: "https://github.com/alice-moradiya/IT-202-Restaurant-website-project"
  },

  {
    name: "Secure-chat-app",
    description: "Python; UI/UX design leadership; intuitive, secure chat interface. Implemented Monoalphabetic, DES, AES, RSA encryption. Extended security to image encryption/decryption.",
    imageUrl: "/securechat.png",
    // viewLink: "#",
    codeLink: "https://github.com/alice-moradiya/IT-270-Secure-ChatApp-Project"
  },

];

const ProjectsSection = () => {
  return (
    <div id="projects" >
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ height: '300px' }}>
              <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '100%' }}>
                <img src={project.imageUrl} alt={project.name} className="pro-image w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center flex-col p-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-opacity-0 transition-opacity duration-500 hover:bg-opacity-95">
                  <h2 className="font-bold text-xl text-white bg-opacity-80 hover:bg-opacity-100 transition-opacity duration-300">{project.name}</h2>
                  <p className="text-white text-base text-center bg-opacity-70 hover:bg-opacity-90 transition-opacity duration-300">{project.description}</p>
                  <div className="links2 mt-auto">
                    <a href={project.viewLink} className="no-underline bg-white text-teal-500 hover:text-blue-500 mr-2 px-4 py-2 inline-block rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">View</a>
                    <a href={project.codeLink} className="no-underline bg-white text-teal-500 hover:text-blue-500 px-4 py-2 inline-block rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">Code</a>
                  </div>
                </div>

              </div>
              <div id="projectname">{project.name}</div>
            </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;