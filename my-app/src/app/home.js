import React, { useState, useEffect } from 'react';
import { buttons } from '@/app/utils/components/ui/tailwindcss-buttons.tsx';
import '../app/globals.css';

const jobTitles = ["Web Development", "Software Development", "Frontend Development", "Backend Development"]; // Add more job titles if needed

const HomePageContent = () => {
  const borderMagicButton = buttons.find(button => button.name === 'Border Magic').component;
  const [jobTitle, setJobTitle] = useState('');
  const [jobIndex, setJobIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  useEffect(() => {
    const typeSpeed = 150; // milliseconds
    let typingTimeout;
    
    if (charIndex < jobTitles[jobIndex].length) {
      typingTimeout = setTimeout(() => {
        setJobTitle((prev) => prev + jobTitles[jobIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setJobTitle('');
        setCharIndex(0);
        setJobIndex((prev) => (prev + 1) % jobTitles.length);
      }, 3000); // Delay before starting the next job title
    }
    
    return () => clearTimeout(typingTimeout);
  }, [jobTitle, charIndex, jobIndex]);
  return (
      <div id="home" className="home-content text-white"> 
        <h1>Alice Moradiya</h1>
        <h3> I am into {jobTitle}|</h3>
        <h2> <img src="/Web-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo"/> Web Developer |   
         <img src="/Soft-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo"/> Software Developer</h2>
        <p>Dynamic Software Developer with a track record of driving user adoption and enhancing </p>
        <p>software functionality. Proficient in software development and database management </p>
        <p>with a strong foundation in teamwork and problem-solving.</p>
        {borderMagicButton}
 
        
      </div>

  );
};

export default HomePageContent;
