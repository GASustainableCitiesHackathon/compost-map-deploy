import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const authenticatedOptions = (
  <>
    <Nav.Link href="/change-password">
      <h4>Change Password</h4>
    </Nav.Link>
    <Nav.Link href="/sign-out">
      <h4>Sign Out</h4>
    </Nav.Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Link href="/sign-in" className="mx-4">
      <h4>Log In</h4>
    </Nav.Link>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Link href="/" className="mx-4">
      <h4>Home</h4>
    </Nav.Link>
    <Nav.Link href="/about" className="mx-4">
      <h4>About</h4>
    </Nav.Link>
  </>
);
const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="md">
    <Navbar.Brand href="/">
      <Image src="./icons/Header-Logo.png" width="300px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {user && (
          <span className="navbar-text mr-2 text-success">
            <h4>Welcome, {user.email}</h4>
          </span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
