import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="about-container flex items-center justify-center text-white bg-[rgba(255,255,255,0.137)]">
        <div className="about-content relative z-1 text-center">
          <h1 className="text-[42px] text-white" > About Me</h1>
          <p className="text-white">👋 Hi, I am Alice  🌟</p>
          <p className="text-white"> A recent BSc. in Information Technology graduate from Concordia University of Edmonton, with a minor in Mathematics and a passion for building impactful web solutions. </p>
          <div>
            <br />
            <h2 className="text-3xl font-semibold mb-4">Skills Toolbox 🛠️</h2>
            <ul className='text-white'>
              <li><strong> Python | Java | C++ | JavaScript | PHP </strong></li>
              <li><strong> React.js | Next.js | Express.js | Bootstrap | Tailwind CSS | jQuery | Shadcn UI </strong></li>
              <li> <strong>MongoDB | MySQL | AWS ☁️ | Vercel | Firebase</strong></li>
              <li> <strong> Git | GitHub | Jira | Postman | VS Code | WordPress | Docker (basic)</strong></li>
              <li> <strong>OpenAI API | GitHub Copilot | Pytorch | TensorFlow | Prompt Engineering</strong></li>
            </ul>
          </div>
          <br />
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
