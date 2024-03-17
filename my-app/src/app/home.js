import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background';
import '../app/globals.css';
import { buttons } from '@/app/utils/components/ui/tailwindcss-buttons.tsx';

const HomePageContent = () => {
  const borderMagicButton = buttons.find(button => button.name === 'Border Magic').component;
  return (
      <div id="home-content" className="home-content text-white"> 
        <h1>Alice Moradiya</h1>
        <h2>Web Developer | Software Developer</h2>
        <p>Dynamic Software Developer with a track record of driving user adoption and enhancing </p>
        <p>software functionality. Proficient in software development and database management </p>
        <p>with a strong foundation in teamwork and problem-solving.</p>
        {borderMagicButton}
 
        
      </div>

  );
};

export default HomePageContent;
