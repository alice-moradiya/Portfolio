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
            <div className="education-section">
                <div className="school-logo-container">
                <img src="/Ashadeep.png" alt="Ashadeep Science Bhavan" className="school-logo" />
                </div>
                <div className="school-education-info">
                <h2>Ashadeep Science Bhavan</h2>
                    <h3>High School Diploma</h3>
                    <h4>Computer Science | 2017 – 2019</h4>
                    <p>Grade: A*</p>
                    <p>Mastered foundational computer science principles, focusing on programming languages such as Python and Java, which laid the groundwork for advanced software development.
Developed a strong understanding of software development life cycle (SDLC) methodologies, enhancing problem-solving and project management skills.
Gained practical experience in web development and database management, utilizing technologies like HTML, CSS, and MySQL, preparing for real-world software development challenges.</p>
                </div>
            </div>
        </div>
                )


}

                export default education