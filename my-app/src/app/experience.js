import React, { useState, useEffect } from 'react';

const experiences = [
  {
    id: 1,
    title: "Grey-box",
    position: "Web Developer | Internship",
    date: "December 2023 - March 2024",
  },
  {
    id: 2,
    title: "Techeshta",
    position: "Software Developer",
    date: "July 2019 - March 2020",
  },
  {
    id: 3,
    title: "Self Employed",
    position: "Full Stack Developer",
    date: "May 2021 - Present",
  },

];

const ExperiencePage = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      
      const newActiveId = window.scrollY > 200 ? 2 : 1;
      setActiveId(newActiveId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='Experience' className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className={`timeline-item ${activeId === exp.id ? 'active' : ''}`}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p>{exp.position}</p>
              <span>{exp.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
