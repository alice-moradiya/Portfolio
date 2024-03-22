import React, { useState, useEffect } from 'react';

const experiences = [
  {
    id: 1,
    title: "Mapstreak Flyseas",
    position: "Web Developer | Internship",
    date: "June 2021 - Dec 2021",
  },
  {
    id: 2,
    title: "Self Employed",
    position: "Full Stack Developer",
    date: "Oct 2021 - Present",
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
    <div className="experience-container">
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
