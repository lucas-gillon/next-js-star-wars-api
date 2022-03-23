import Head from "next/head";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Star Wars Vehicle Shop</title>
      </Head>
      <nav
        className="navbar navbar-expand-lg navbar-light "
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
          </ul>
        </div>
      </nav>
      <article>{children}</article>
      <hr />
      <footer>
        <div className="card-body container">
          <h5 className="card-title">Made with</h5>
          <a
            href="https://swapi.dev"
            target={"_blank"} rel={"noreferrer"}
          >
            Star wars API
          </a>
        </div>
      </footer>
    </div>
  );
};
