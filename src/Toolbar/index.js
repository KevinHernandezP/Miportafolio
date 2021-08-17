import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';


const Toolbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className="Texto text-white">Home</Nav.Link>
            <Nav.Link href="#workss"  className="Texto text-white">Projects</Nav.Link>
            <Nav.Link href="#skills" className="Texto text-white">Skills</Nav.Link>
            <Nav.Link href="#footer" className="Texto text-white">Contact Me</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );
}

export default Toolbar;