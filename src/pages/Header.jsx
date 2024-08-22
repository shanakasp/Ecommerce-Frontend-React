import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header({ authenticate }) {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("userID");
    navigate("/register");
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Products</Nav.Link>
            <Nav.Link href="/update">Update Products</Nav.Link>
          </Nav>
          <Nav>
            {!authenticate ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="/register">
                  Register
                </Nav.Link>
              </>
            ) : (
              <Nav>
                <NavDropdown title="Profile">
                  <NavDropdown.Item>Name: {userName}</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
