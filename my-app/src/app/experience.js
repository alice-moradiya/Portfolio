import React, { useEffect, useRef } from 'react';


const experiences = [
  {
    id: 1,
    title: "Grey-box",
    position: "Web Developer | Internship",
    date: "January 2024 - April 2024",
  },
  {
    id: 2,
    title: "Techeshta",
    position: "Web Developer | Internship",
    date: "March 2019 - March 2020",
  },
  // {
  //   id: 3,
  //   title: "Self Employed",
  //   position: "Full Stack Developer",
  //   date: "May 2021 - Present",
  // },

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