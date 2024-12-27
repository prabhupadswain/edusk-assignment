import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    // <header>
    //   <h1 className='display-2 mb-5' style={{ textAlign: 'center' }}>
    //     User DBMS Application
    //   </h1>
    // </header>
    <header className="mb-3">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link className="navbar-brand" to="/">
            User Profile Manager
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/display-user" className="btn btn-link-dark">
                User Profiles
              </Link>
              <Link to="/add-user" className="btn btn-link-dark">
                Add User
              </Link>
              <Link to="/edit-user" className="btn btn-link-dark">
                Edit User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
