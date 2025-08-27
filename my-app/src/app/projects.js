import React from 'react';
const projects = [

  {
    name: "BookStore",
    description: "a full stack (MERN) (dynamic/responsive) web project, crafted with 𝗠𝗼𝗻𝗴𝗼𝗗𝗕, 𝗘𝘅𝗽𝗿𝗲𝘀𝘀.𝗷𝘀, 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀, 𝗮𝗻𝗱 𝗡𝗼𝗱𝗲.𝗷𝘀.",
    imageUrl: "/mernpro.png",
    viewLink: "https://bookstoremern-two.vercel.app/",
    codeLink: "https://github.com/alice-moradiya/Full-stack-Project-MERN"
  },
  {
    name: "Personal Portfolio Website",
    description: "Made from scratch; utilized Next.js for server-side rendering. React.js & Tailwind CSS for the front-end. An interactive timeline, smooth scrolling.",
    imageUrl: "/Portfolio.png",
    viewLink: "https://alicemoradiya.vercel.app/",
    codeLink: "https://github.com/alice-moradiya/Portfolio"
  },

  // {
  //   name: "React.js Project",
  //   description: "Built with React.js: State management, component-based architecture.Designed for functionality: Custom hooks, event handling. UI/UX focus: Responsive design, interactive elements.",
  //   imageUrl: "/reactpro2.png",
  //   viewLink: "https://reactcalculator22.netlify.app/",
  //   codeLink: "https://github.com/alice-moradiya/React.js-project"
  // },
  // {
  //   name: "SortMaster - Interactive Sorting Algorithm",
  //   description: "Front-end development: HTML, CSS, JavaScript. Implemented & optimized sorting algorithms ( Bubble, Insertion, Merge, Quick). User-centric design, interactive UX/UI.",
  //   imageUrl: "/sortmaster.png",
  //   viewLink: "https://sortmaster007.netlify.app/",
  //   codeLink: "https://github.com/alice-moradiya/SortMaster"
  // },

  {
    name: "AI-Finance-Advisor",
    description: "AI-powered web app using ChatGPT API, React.js, and Tailwind CSS to provide personalized financial advice and simplify money management with a secure, user-friendly design.",
    imageUrl: "/finapro.png",
    viewLink: "https://financeadvisor.vercel.app/",
    codeLink: "https://github.com/alice-moradiya/Automated-Personal-Finance-Advisor-IT452-capstone-project"
  },

  // {
  //   name: "Restaurant Website",
  //   description: "Front-end development: Bootstrap, jQuery, CSS for responsive design. Crafted engaging UI/UX: Menu navigation",
  //   imageUrl: "/restweb.png",
  //   viewLink: "https://poutineparadise.netlify.app/ ",
  //   codeLink: "https://github.com/alice-moradiya/IT-202-Restaurant-website-project"
  // },


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