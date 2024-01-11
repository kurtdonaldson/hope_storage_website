import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../components/Sidebar.css";
// import ListGroup from "react-bootstrap/ListGroup";
// import { Link } from "react-router-dom";

const Sidebar = ({ display }) => {
  return (
    <div className={display}>
      <Menu>
        <a id="home" className="menu-item" href="#whatWeOfferDiv">
          What we offer
        </a>
        <a id="about" className="menu-item" href="#howItWorks">
          How it works
        </a>
        <a id="contact" className="menu-item" href="#contactInfo">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default Sidebar;
