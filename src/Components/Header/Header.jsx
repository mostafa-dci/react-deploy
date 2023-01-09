import { Container, Nav, Navbar } from "react-bootstrap";
import {useContext} from 'react'
import {ThemeContext} from '../../ThemeContext'
import { Link } from "react-router-dom";

function Header() {
    const {theme} = useContext(ThemeContext);
  return (
    <Navbar bg={theme.name} expand="lg" variant={theme.name}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Application
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/theme">
              Theme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
