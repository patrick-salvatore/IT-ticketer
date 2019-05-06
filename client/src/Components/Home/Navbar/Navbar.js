import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

import './navbar.css'


function NavBar() {
  return (
    <div >
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
          <Navbar.Brand>HealthSTAR IT</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="float-right">
            <Link className="link" to='/signin'>Sign In</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}



export default NavBar;
