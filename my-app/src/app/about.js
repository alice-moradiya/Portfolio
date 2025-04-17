import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="about-container flex items-center justify-center text-white bg-[rgba(255,255,255,0.137)]">
        <div className="about-content relative z-1 text-center">
          <h1 className="text-[42px] text-white" > About Me</h1>
          <p className="text-white">👋 Hi, I am Alice  🌟</p>
          <p className="text-white"> I am a student at the Concordia University of Edmonton, pursuing a major in Information Technology and a minor in Mathematics. </p>
          <div>
            <h2>Skills Toolbox 🛠️</h2>
            <ul className='text-white'>
              <li>Languages: Python | Java | C++ | JavaScript | PHP</li>
              <li>Frameworks & Libraries: Next.js | Bootstrap | Tailwind CSS | React.js | jQuery</li>
              <li>Database & Cloud: MongoDB | MySQL 🗃️ | AWS ☁️</li>
              <li>Node.js | Shadcn UI | WordPress | RESTful APIs | Git | GitHub | Jira</li>
            </ul>
          </div>
          <p className='text-white'>What sets me apart? Beyond my technical skills, I&apos;m a quick learner 🚀, effective communicator, and enthusiastic collaborator. I&apos;m deeply passionate about applying my knowledge to projects that demand innovative solutions and deliver meaningful impact 💥.</p>
          <p className='text-white'>💬 Let&apos;s connect and create something impactful together! 💡</p>
        </div>
        <div className="about-image-container max-w-[200px] relative">
          <img className="about-image" src={"/profile.png"} alt="[Alice photo]" />
        </div>
      </div>
    </div>
  );
};

export default About;
