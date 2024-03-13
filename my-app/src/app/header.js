import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
      <Navbar fixed="top" id="Nav" >
        <Container>
          <Navbar.Brand href="#home"> <img src="/logo.png" 
            width="90" // Setting the width of image
            height="35" // Setting the height of image
            className="d-inline-block align-top" // Bootstrap classes for alignment
            alt="Logo"
          /></Navbar.Brand>
          <Nav Id= "text" className="me-auto">
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