import React from 'react';

const About = () => {
  return (
    <div id="about">
    <div className="about-container flex items-center justify-center text-white bg-[rgba(255,255,255,0.137)]">
      <div className="about-content relative z-1 text-center max-w-[600px]">
        <h1 className="text-[42px] text-white" > About Me</h1>
        <p className="text-white">Hi, I am Alice.</p>
        <p className="text-white">I am a student at the Concordia University of Edmonton, pursuing a major in Information Technology and a minor in Mathematics. </p>
        <div>
        <ul className="text-white">
          <li>Languages: Python | Java | C++ | PHP </li>
          <li>Frameworks: Next.js | Bootstrap | Tailwind CSS | React.js | ASP.NET</li>
          <li>Database Management: MySQL | AWS</li>
          <li>WordPress | Restful APIs | Git | GitHub</li>
   
        </ul>
        </div>
        <p className="text-white">Beyond my technical skills, I am a quick learner, strong communicator and collaborator, I am passionate about applying my knowledge to projects that demand innovative solutions and meaningful impact.</p>
        <p className="text-white">Let&apos;s connect and create something impactful together.</p>
        
      </div>
      <div className="about-image-container max-w-[200px] ml-10 relative">
        <img className="about-image" src={"/profile.png"} alt="[Alice photo]" />
      </div>
    </div>
    </div>
  );
};

export default About;
