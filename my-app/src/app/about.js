import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="about-container flex items-center justify-center text-white bg-[rgba(255,255,255,0.137)]">
        <div className="about-content relative z-1 text-center">
          <h1 className="text-[42px] font-extrabold text-white  animate-fill-word" > About Me</h1>
          {/* <p className="text-white">👋 Hi, I am Alice  🌟</p> */}
          <p className="text-white"> I&apos;m a software developer with a BSc. in Information Technology from Concordia University of Edmonton and hands-on experience across freelance, agency, and startup projects. I&apos;ve built full-stack applications, Chrome extensions, and WordPress solutions using React, Next.js, PHP, MySQL, and more. </p>
          <div>
            {/* <h2 className="text-3xl font-semibold mb-4 ">Skills  Toolbox 🛠️</h2>
            <ul className='text-white pl-0 text-center' >
              <li><strong> Python | Java | C++ | JavaScript | PHP </strong></li>
              <li><strong> React.js | Next.js | Express.js | Bootstrap | Tailwind CSS | jQuery | Shadcn UI </strong></li>
              <li> <strong>MongoDB | MySQL | AWS ☁️ | Vercel | Firebase</strong></li>
              <li> <strong> Git | GitHub | Jira | Postman | VS Code | WordPress | Docker (basic)</strong></li>
              <li> <strong>OpenAI API | GitHub Copilot | Pytorch | TensorFlow | Prompt Engineering</strong></li>
            </ul> */}
          </div>

          <p className='text-white'> I focus on creating clean, scalable, and user-friendly web solutions, combining strong technical skills with clear communication and teamwork.</p>
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
