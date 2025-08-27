import React, { useEffect, useRef } from 'react';


const experiences = [
  {
    id: 1,
    title: "Tinker Solution",
    position: "Software Developer",
    date: "May 2025 - Present",
  },
  {
    id: 2,
    title: "Grey-box",
    position: "Web Developer",
    date: "January 2024 - August 2024",
  },
  {
    id: 3,
    title: "SwiftLayer Labs",
    position: "Software Developer",
    date: "September 2022 - September 2023",
  },
  {
    id: 4,
    title: "AJ Infosoft",
    position: "Software Developer",
    date: "May 2022 – September 2022",
  },

];

const ExperiencePage = () => {
  const expRefs = useRef([]);
  expRefs.current = [];

  const addToRefs = (el) => {
    if (el && !expRefs.current.includes(el)) {
      expRefs.current.push(el);
    }
  };
  // IntersectionObserver API
  useEffect(() => {
    const observer = new IntersectionObserver(  
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust if needed
    );

    expRefs.current.forEach((el) => {
      observer.observe(el);
    });

    return () => expRefs.current.forEach((el) => {
      observer.unobserve(el);
    });
  }, []);

  return (
    <div id="Experience" className="experience-container">
      <h2 className="text-center text-3xl font-bold my-5">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div ref={addToRefs} key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3 className="max-w-full break-words">{exp.title}</h3>
              <p>{exp.position}</p>
              <p>{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;