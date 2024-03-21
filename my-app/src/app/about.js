import React from 'react';

const About = () => {
  return (
    <div id="about">
    <div className="about-container">
      <div className="about-content">
        <h1> About Me</h1>
        <p>Hi, I am Alice.</p>
        <p>I am a student at the Concordia University of Edmonton, pursuing a major in Information Technology and a minor in Mathematics. </p>
        <div>
        <ul>
          <li>Languages: Python | Java | C++ | PHP </li>
          <li>Frameworks: Next.js | Bootstrap | Tailwind CSS | React.js | ASP.NET</li>
          <li>Database Management: MySQL | AWS</li>
          <li>WordPress | Restful APIs | Git | GitHub</li>
   
        </ul>
        </div>
        <p>Beyond my technical skills, I am a quick learner, strong communicator and collaborator, I am passionate about applying my knowledge to projects that demand innovative solutions and meaningful impact.</p>
        <p>Let's connect and create something impactful together.</p>
        
      </div>
      <div className="about-image-container">
        <img className="about-image" src={"/profile.png"} alt="[Alice photo]" />
      </div>
    </div>
    </div>
  );
};

export default About;
