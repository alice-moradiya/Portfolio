import React, { useState, useEffect } from 'react';
import { buttons } from '@/app/utils/components/ui/tailwindcss-buttons.tsx';
import '../app/globals.css';
import LinkedIn from './linkedin'
import Github from './github'

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
    <div id="home" className="relative z-5 text-center text-white pt-[185px] pb-[163px]">
      <h1 className="text-[72px] text-shadow style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}">Alice Moradiya</h1>
      <h3 className="text-[28px]"> I am into {jobTitle}|</h3>
      <h2 className="text-[32px]"> <img src="/Web-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo" /> Web Developer |
        <img src="/Soft-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo" /> Software Developer</h2>
      <p>⚡ Dynamic Web Developer with a track record of driving user adoption and enhancing software functionality.</p>
      <p>Proficient in Web development 🖥️ and database management 📊 with a strong foundation in teamwork.</p>
      <p>🔍 Skilled in problem-solving to deliver effective solutions.</p>

      <div id="infobuttons"><LinkedIn />
        {/* Resume button */}
        <a href='/Resume.pdf' id="bordermagic" className="no-underline relative inline-flex h-12 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Resume
          </span>
        </a>
        <Github />
      </div>
    </div>

  );
};

export default HomePageContent;
