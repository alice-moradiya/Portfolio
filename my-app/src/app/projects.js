import React from 'react';
const projects = [

  {
    name: "React.js Project",
    description: "...",
    imageUrl: "/reactpro.png", 
    viewLink: "#",
    codeLink: "#"
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" >
      <div className="container mx-auto">
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg mt-4">A showcase of my work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.name} className="w-full" />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{project.name}</h2>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="mt-4 flex justify-center">
                  <a href={project.viewLink} className="btn-view mr-2">View</a>
                  <a href={project.codeLink} className="btn-code">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
