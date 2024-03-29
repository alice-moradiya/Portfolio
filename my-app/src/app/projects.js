import React from 'react';
const projects = [

  {
    name: "SortMaster - Interactive Sorting Algorithm",
    description: "...",
    imageUrl: "/sortmaster.png", 
    viewLink: "https://sortmaster3.000webhostapp.com/ ",
    codeLink: "#"
  },
  {
    name: "Restaurant Website",
    description: "...",
    imageUrl: "/restweb.png", 
    viewLink: "https://poutineparadise.000webhostapp.com/ ",
    codeLink: "#"
  },
  {
    name: "React.js Project",
    description: "...",
    imageUrl: "/reactpro2.png", 
    viewLink: "https://calculator2221.000webhostapp.com/",
    codeLink: "#"
  },
  {
    name: "Course-registration-system",
    description: "...",
    imageUrl: "/coursereg.png", 
    // viewLink: "#",
    codeLink: "#"
  },
  {
    name: "Travel-agency-website",
    description: "...",
    imageUrl: "/travelage.png", 
    // viewLink: "#",
    codeLink: "#"
  },
  {
    name: "Secure-chat-app",
    description: "...",
    imageUrl: "/securechat.png", 
    // viewLink: "#",
    codeLink: "#"
  },

];

const ProjectsSection = () => {
  return (
    <div id="projects" >
      <div className="container mx-auto">
        <h1>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ height: '200px' }}>
              <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '100%' }}>
                <img src={project.imageUrl} alt={project.name}  className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center flex-col p-6 bg-white bg-opacity-0 transition-opacity duration-500 hover:bg-opacity-95">
                  <h2 className="font-bold text-xl text-gray-800 mb-2">{project.name}</h2>
                  <p className="text-gray-700 text-base text-center">{project.description}</p>
                  <div className="mt-4">
                    <a href={project.viewLink} className="btn-view mr-2">View</a>
                    <a href={project.codeLink} className="btn-code">Code</a>
                  </div>
                </div>
              </div>
              <div id= "projectname">{project.name}</div>
            </div>
            
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;