import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Star Wars Vehicle Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/vehicles" style={{ color: "black" }}>
              All vehicles
            </Nav.Link>
            {user ? (
              <li>
                <Nav.Link
                  href="/api/auth/logout"
                  style={{ backgroundColor: "red" }}
                >
                  Logout
                </Nav.Link>
              </li>
            ) : (
              <li>
                <Nav.Link
                  href="/api/auth/login"
                  style={{ backgroundColor: "green" }}
                >
                  Login or Signup
                </Nav.Link>
              </li>
            )}
            {user ? (
              <Nav.Link href={"/user_infos"} style={{ color: "black" }}>
                User Infos
              </Nav.Link>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <Nav.Link href="/cart" style={{ color: "black" }}>
                  Cart
                </Nav.Link>
              </li>
            ) : (
              ""
            )}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Navbar.Text style={{ marginRight: "2em", color:"black" }}>
            {user ? `Connected as ${user.name}` : "Not logged in"}
          </Navbar.Text>
        </Navbar.Collapse>
        {/* <div className="nav-text" style={{ marginRight: "2em" }}>
          {user ? `Connected as ${user.name}` : "Not logged in"}
        </div> */}
      </Container>
    </Navbar>
  );
}
