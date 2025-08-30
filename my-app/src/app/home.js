import React, { useState, useEffect } from 'react';
import { buttons } from '@/app/utils/components/ui/tailwindcss-buttons.tsx';
import '../app/globals.css';
import LinkedIn from './linkedin'
import Github from './github'

const jobTitles = ["Web Development", "MERN Stack Development", "Software Development", "Full Stack Development"];

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
    <div id="home" className="relative z-5 text-white pt-[120px] lg:pt-[175px] md:pt-[140px] sm:pt-[120px] pb-[163px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Image Section - Left on desktop, top on mobile */}
          <div className="order-1 lg:order-1 flex-shrink-0">
            <div className="max-w-[250px] lg:max-w-[300px] mx-auto lg:mx-0">
              <img 
                className="w-full h-auto rounded-full border-3 border-white/20 shadow-lg hover:border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300" 
                src="/profile.png" 
                alt="Alice Moradiya" 
              />
            </div>
          </div>
          
          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2 flex-1 text-center lg:text-right">
            <h1 className="text-[43px] lg:text-[62px] text-shadow style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}">
              Hi, I&apos;m <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-800 bg-clip-text drop-shadow-lg">Alice Moradiya</span>
            </h1>
            <br/>
            <h3 className="text-[20px] lg:text-[28px]">I am into {jobTitle}|</h3>
            <h2 className="text-[24px] lg:text-[32px] hidden sm:block">
              <img src="/Web-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo" /> Web Developer |
              <img src="/Soft-img.png" width="35" height="35" className="d-inline-block align-top" alt="Logo" /> Software Developer
            </h2>
            <br />
            <p className="text-[14px] lg:text-base">⚡ Dynamic Software Engineer focused on building reliable, user-friendly applications that make an impact.</p>
            {/* <p className="text-[14px] lg:text-base">Proficient in web development &amp; database management, skilled in problem-solving &amp; delivering effective solutions.</p> */}
            <p className="text-[14px] lg:text-base">💬 Let&apos;s connect &amp; turn ideas into impactful results! 💡</p>
            <div id="infobuttons" className="mt-6">
              <LinkedIn />
              {/* Contact Me button */}
              <a href='mailto:alice.moradiya@gmail.com' id="bordermagic" className="no-underline relative inline-flex h-12 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact
                </span> 
              </a>
              <Github />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
