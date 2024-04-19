import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className=" text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold">Alice&apos;s Portfolio</h2>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
            <p>Keep Rising 🚀.</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <nav>
              <ul>
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#Education" className="hover:underline">Education</a></li>
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#Experience" className="hover:underline">Experience</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <p>📍 Edmonton, Alberta-T6E2G7</p>
            <a href='mailto:alice.moradiya@gmail.com'>✉️ alice.moradiya@gmail.com</a> {/* windows + . for emoji */}
            <div className="social-icons">
              {/* social media links */}
            </div>
          </div>
        </div>
        <div  className="credit border-t border-gray-700 text-center py-8">
          <p> Designed by Alice Moradiya </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
