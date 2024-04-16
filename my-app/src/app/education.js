import React from "react";
import { buttons } from '@/app/utils/components/ui/tailwindcss-buttons.tsx';

const education = () => {
    const Githubbutton = buttons.find(button => button.name === 'Shimmer').component;
    return (

        <div id="Education" className="education-section">

            <div className="university-logo-container">
                <img src="/Concordia.png" alt="Concordia University of Edmonton" className="university-logo" />
            </div>
            <div className="education-info">
                <p>🎓 <strong>Education is not just about learning facts, but about training the mind to think.</strong></p>
                <h3>BSc. in Information Technology | 2020 – 2024</h3>
                <p><strong>Major:</strong> Information Technology 🖥️ | <strong>Minor:</strong> Mathematics 🔢</p>
                <p><strong>Relevant Courses:</strong> Software Development, Web Development, Database Management, Networking, Cybersecurity, Business, Economics</p>
                <p><strong>University Projects:</strong> Travel-agency-website (PHP, MySQL) ✈️, Secure-chat-app (Python) 🗨️, Course-registration-system (Python) 📚</p>

                <a href="https://github.com/alice-moradiya" className="no-underline inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    GitHub
                </a>
            </div>
            <div className="school-logo-container">
                <img src="/Ashadeep.png" alt="Ashadeep Science Bhavan" className="school-logo" />
            </div>
            <div className="school-education-info">
                <h3>🎓 High School Diploma</h3>
                <h4>💻 Computer Science | 2017 – 2019</h4>
                <p><strong>Grade:</strong> A* 🌟</p>
                <p><strong>Key Skills:</strong> Programming Fundamentals, Object-Oriented Design, Web Development Basics, Problem-Solving</p>
                <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Basic Python & C++</p>
                <p><strong>Capstone Projects:</strong> Developed dynamic websites and simple software applications</p>
                <p><strong>Internship:</strong> Secured a Web development internship at Techeshta, applying and enhancing these competencies 👨‍💻</p>

            </div>

        </div>
    )


}

export default education