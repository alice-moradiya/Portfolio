import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="z-10 bg-black border-none shadow-none font-sans font-normal text-lg pl-10 lg:pl-10">
            <Container className="lg:ml-10">
                <Navbar.Brand href="#home" className="pr-28"> 
                    <img src="/logo.png" className="h-18 mr-2.5 align-top" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ filter: 'invert(100%)' }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        {/* Optional: <Nav.Link href="#Contactme">Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;