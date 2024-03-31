import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
      <Navbar fixed="top" id="Nav" >
        <Container>
          <Navbar.Brand href="#home" style={{ paddingRight: '115px' }}> <img src="/logo.png" 
            width="90" 
            height="35" 
            className="d-inline-block align-top" 
            alt="Logo"
          /></Navbar.Brand>
          <Nav id= "text" className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Contactme">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header