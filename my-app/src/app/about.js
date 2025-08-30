import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="about-container flex items-center justify-center text-white bg-[rgba(255,255,255,0.137)]">
        <div className="about-content relative z-1 text-center">
          <h1 className="text-[42px] font-extrabold text-white animate-fill-word">About Me</h1>
          <br/>
          <p className="text-white">I&apos;m a passionate software developer with a BSc. in Information Technology from Concordia University of Edmonton. My journey in tech has been driven by curiosity and a desire to create meaningful solutions.</p>
          <br/>
          <p className="text-white">Throughout my career, I&apos;ve had the opportunity to work on diverse projects - from full-stack web applications to Chrome extensions and WordPress solutions. I&apos;ve collaborated with multiple companies and freelanced, gaining hands-on experience with modern technologies like React, Next.js, PHP, MySQL, and more.</p>
          <br/>
          <div>
            <h2 className="text-3xl font-semibold mb-4">My Approach 🎯</h2>
            <ul className='text-white pl-0 text-center'>
              <li><strong>Problem-Solving First:</strong> I believe in understanding the core problem before diving into solutions</li>
              <li><strong>Clean & Scalable Code:</strong> Writing maintainable code that grows with your business</li>
              <li><strong>User-Centric Design:</strong> Creating experiences that users love to interact with</li>
              <li><strong>Continuous Learning:</strong> Staying updated with the latest technologies and best practices</li>
            </ul> 
          </div>
          <br/>
          <p className='text-white'>When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
          <br/>
          <p className='text-white'>💬 Let&apos;s connect and create something impactful together! 💡</p>
        </div>
      </div>
    </div>
  );
};

export default About;
