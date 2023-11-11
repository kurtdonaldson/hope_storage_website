import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar className="navbar" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-center">
        <Nav className="navlinks d-flex justify-content-between">
          <Nav.Link href="#whatWeOfferDiv">What we offer</Nav.Link>
          <Nav.Link href="#howItWorks">How it works</Nav.Link>
          <Nav.Link href="#contactInfo">How to find us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
