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