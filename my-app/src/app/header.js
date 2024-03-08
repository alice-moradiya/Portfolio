import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from './logo.jpeg'; 


const Header = () => {
    return (
      <Navbar fixed="top" id="Nav" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> <img
            src={logoImage}
            width="90" // Setting the width of image
            height="30" // Setting the height of image
            className="d-inline-block align-top" // Bootstrap classes for alignment
            alt="Logo"
          /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Education</Nav.Link>
            <Nav.Link href="#">Experience</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header