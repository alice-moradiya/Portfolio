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
                <p>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think</p>
                <h3>BSc. in Information Technology | 2020 – 2024</h3>
                <p>Major: Information Technology | Minor: Mathematics</p>
                <p>Relevant Courses: Software Development, Web Development, Database Management, Networking, Cybersecurity, Business, Economics</p>
                <p>University Projects: Travel-agency-website (PHP), Secure-chat-app (Python), Course-registration-system (Python)</p>
                {Githubbutton}
            </div>
                <div className="school-logo-container">
                    <img src="/Ashadeep.png" alt="Ashadeep Science Bhavan" className="school-logo" />
                </div>
                <div className="school-education-info">
                    <h3>High School Diploma</h3>
                    <h4>Computer Science | 2017 – 2019</h4>
                    <p>Grade: A*</p>
                    <p>Key Skills: Programming Fundamentals, Object-Oriented Design, Web Development Basics, Problem-Solving</p>
                    <p>Technologies: HTML, CSS, JavaScript, Basic Python & C++</p>
                    <p>Capstone Projects: Developed dynamic websites and simple software applications</p>
                    <p>internship: Secured a software development internship at Techeshta, applying and enhancing these competencies</p>
                </div>
            
        </div>
    )


}

export default education