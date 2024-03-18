import React from 'react';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>Hi, I am Alice.</p>
        <p>I am a student at the Concordia University of Edmonton, pursuing a major in Information Technology and a minor in Mathematics. </p>
        <ul>
          <li>Languages: Python, Java, C++,</li>
          <li></li>
   
        </ul>
        <p>Beyond my technical skills, I am a strong communicator and collaborator, eager to contribute to interdisciplinary teams and engage in meaningful projects.</p>
        
      </div>
      <div className="about-image">
        <img src={"/profile.png"} alt="[Alice photo]" />
      </div>
    </div>
  );
};

export default About;
