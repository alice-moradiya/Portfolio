import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background';
import '../app/globals.css';

const HomePageContent = () => {
  return (
      <div id="home-content" className="home-content text-white"> // Added 'text-white' class for white text
        <h1>Your Name</h1>
        <h2>ML Developer | Data Scientist</h2>
        <p>I am a student at the University of XYZ, pursuing a major in Computer Science with a passion for data science and machine learning.</p>
        <button>RESUME</button>
      </div>

  );
};

export default HomePageContent;
