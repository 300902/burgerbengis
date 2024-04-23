import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Image, } from 'react-bootstrap';
import logoImage from "../assets/image/logo.png";
import { Link } from 'react-router-dom';

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/" style={{ fontFamily: "Retro" }}> 
        <Image src={logoImage} alt="logo" width="40" height="40" className="d-inline-block align-center" style={{ marginRight: "10px" }}/>
          RECIPE RICE BOWL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto gap-2">
            <Link to="/" style={{ color: "black", fontFamily: "cursive"}}>Home</Link>
            <Link to="/menu" style={{ color: "black", fontFamily: "cursive" }}>Menu</Link>
            <Link to="/about" style={{ color: "black", fontFamily: "cursive" }}>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          {/* ... */}
        </Offcanvas.Header>
        {/* ... */}
      </Offcanvas>
    </div>
  );
}

export default App;