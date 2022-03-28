import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";

export const Layout: React.FC = ({ children }) => {
  const { user } = useUser();
  return (
    <div>
      <Head>
        <title>Star Wars Vehicle Shop</title>
      </Head>
      <Navbar
        className="color-nav"
        expand="lg"
        style={{ marginBottom: "2rem" }}
      >
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
            </Nav>
            <Navbar.Text style={{ marginRight: "2em", color: "black" }}>
              {user ? `Connected as ${user.name}` : "Not logged in"}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <article>{children}</article>
      <hr />
      <footer>
        <div className="card-body container">
          <h5 className="card-title">Made with</h5>
          <a href="https://swapi.dev" target={"_blank"} rel={"noreferrer"}>
            Star wars API
          </a>
        </div>
      </footer>
    </div>
  );
};
