import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <NavLink
              to="/mainhome"
              className={({ isActive }) =>
                isActive ? "active home-a" : "home-a"
              }
            >
              <Nav.Link as="div">Home</Nav.Link>
            </NavLink>
            <NavLink
              to="/adduser"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Nav.Link as="div">Add User</Nav.Link>
            </NavLink>
            <NavLink
              to="/userdetails"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Nav.Link as="div">User Details</Nav.Link>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Nav.Link as="div">Contact Us</Nav.Link>
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Nav.Link as="div">Gallery</Nav.Link>
            </NavLink>
          </Nav>
          <div className="regi">
            <Link to="/regi" className="active">
              <button>Register</button>
            </Link>
            <Link to="/log" className="active">
              <button>Login</button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
