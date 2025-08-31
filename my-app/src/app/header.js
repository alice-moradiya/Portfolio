import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

const Header = () => {
    const [activePage, setActivePage] = useState('home');

    // Set home as active by default when component mounts
    useEffect(() => {
        setActivePage('home');
    }, []);

    // Scroll-based navigation logic
    useEffect(() => {
        const sections = [
            { id: 'home', name: 'home' },
            { id: 'Experience', name: 'experience' },
            { id: 'skills', name: 'skills' },
            { id: 'projects', name: 'projects' }
        ];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section is considered "active"
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionName = sections.find(section => section.id === entry.target.id)?.name;
                    if (sectionName) {
                        setActivePage(sectionName);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup observer on unmount
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const handleNavClick = (page) => {
        setActivePage(page);
    };

    const handleLogoClick = () => {
        // Refresh the page to go to home and reset all states
        window.location.reload();
    };

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" data-bs-theme="dark" className="z-10 bg-black border-none shadow-none font-sans font-normal text-lg pl-10 lg:pl-10">
            <Container className=" lg:ml-10">
                <Navbar.Brand 
                    href="#home" 
                    onClick={handleLogoClick}
                    className="text-white text-xl font-bold"
                >
                    <img src="/logo.png" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className="custom-burger-menu"
                    style={{
                        border: 'none',
                        padding: '0.5rem',
                        background: 'transparent',
                        position: 'relative'
                    }}
                />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="pr-10 md:pr-28">
                        <Nav.Link 
                            href="#home" 
                            className={activePage === 'home' ? 'active' : ''}
                            onClick={() => handleNavClick('home')}
                        >
                            Profile
                        </Nav.Link>
                        {/* <Nav.Link 
                            href="#about" 
                            className={activePage === 'about' ? 'active' : ''}
                            onClick={() => handleNavClick('about')}
                        >
                            About
                        </Nav.Link> */}
                        
                        <Nav.Link 
                            href="#Experience" 
                            className={activePage === 'experience' ? 'active' : ''}
                            onClick={() => handleNavClick('experience')}
                        >
                            Experience
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activePage === 'skills' ? 'active' : ''}
                            onClick={() => handleNavClick('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activePage === 'projects' ? 'active' : ''}
                            onClick={() => handleNavClick('projects')}
                        >
                            Projects
                        </Nav.Link>
                        {/* <Nav.Link 
                            href="#Contactme" 
                            className={activePage === 'contact' ? 'active' : ''}
                            onClick={() => handleNavClick('contact')}
                        >
                            Contact
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;