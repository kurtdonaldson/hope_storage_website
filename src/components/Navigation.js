import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "./Sidebar";

function Navigation() {
  //State to hide links and display burger menu when screen size < 805px
  //On initial load we also want to know screen size to know what should be loaded on page
  const [burgerMenu, setBurgerMenu] = useState(
    window.innerWidth > 835 ? false : true
  );

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Function to change nav and burger displays based on screen width

  //Function to change windowWidth state to current window width
  const setWindowDimensions = () => {
    window.innerWidth > 835 ? setBurgerMenu(false) : setBurgerMenu(true);
  };

  //We use useEffect hook to call setWindowDimensions and update window width whenever width changes.
  //Need to unmount event listener after it is called so it can be mounted again.
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);
  return (
    <>
      <Sidebar display={"d-flex"} />
      <Navbar className="navbar" bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center">
          <Nav className="navlinks d-flex justify-content-between">
            <Nav.Link href="#whatWeOfferDiv">What we offer</Nav.Link>
            <Nav.Link href="#howItWorks">How it works</Nav.Link>
            <Nav.Link href="#contactInfo">How to find us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
