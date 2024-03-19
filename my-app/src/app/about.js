import React from 'react';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>Hi, I am Alice.</p>
        <p>I am a student at the Concordia University of Edmonton, pursuing a major in Information Technology and a minor in Mathematics. </p>
        <div className='skills-content'>
        <ul>
          <li>Languages: Python/ Java/ C++/ PHP </li>
          <li>Frameworks: Next.js/ Bootstrap/ React.js/ ASP.NET</li>
          <li>Database Management: MySQL/ AWS</li>
          <li>WordPress/ Restful APIs/  Git/ GitHub</li>
   
        </ul>
        </div>
        <p>Beyond my technical skills, I am a strong communicator and collaborator, eager to contribute to interdisciplinary teams and engage in meaningful projects.</p>
        <p>Let's connect and create something impactful together.</p>
        
      </div>
      <div className="about-image-container">
        <img className="about-image" src={"/profile.png"} alt="[Alice photo]" />
      </div>
    </div>
  );
};

export default About;
