import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import cookieCutter from "cookie-cutter";

  const getCookie = cookieCutter.get("appSession")
  console.log(getCookie)

export const Layout: React.FC = ({ children }) => {
  const { user } = useUser();
  return (
    <div>
      <Head>
        <title>Star Wars Vehicle Shop</title>
      </Head>
      <nav
        className="navbar navbar-expand-lg navbar-light justify-content-between"
        style={{ backgroundColor: "#e3f2fd", marginBottom: "2rem" }}
      >
        <Link href="/">
          <a className="navbar-brand" style={{ marginLeft: "2em" }}>
            Star Wars Vehicle Shop
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/vehicles">
                <a className="nav-link">All vehicles</a>
              </Link>
            </li>
            <li>
              <Link href="/api/auth/login">
                <a className="nav-link" style={{ backgroundColor: "green" }}>
                  Login
                </a>
              </Link>
            </li>
            <li>
              <Link href="/api/auth/login">
                <a className="nav-link">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <article>{children}</article>
      <hr />
      <footer>
        {user ? user.name : "Not logged in"}

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
