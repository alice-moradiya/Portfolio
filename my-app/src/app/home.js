import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background';
import '../app/globals.css';

const HomePageContent = () => {
  return (
      <div id="home-content" className="home-content text-white"> 
        <h1>Alice Moradiya</h1>
        <h2>Web Developer | Software Developer</h2>
        <p>I am a student at the Concordia university, pursuing a bachelor degree in Information technology.</p>
        <button>RESUME</button>
      </div>

  );
};

export default HomePageContent;
