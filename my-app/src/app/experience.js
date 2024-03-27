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
  const [visibleId, setVisibleId] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get all experience items
      const items = document.querySelectorAll('.timeline-item');
      const newVisibleId = [...items].findIndex(item => {
        const rect = item.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });
      setVisibleId(newVisibleId);
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
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${visibleId === index ? 'active' : ''}`}
            style={{
              transform: `translateY(${visibleId >= index ? 0 : 100}%)`,
              opacity: visibleId >= index ? 1 : 0,
              transitionDelay: `${index * 0.2}s`
            }}
          >
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
