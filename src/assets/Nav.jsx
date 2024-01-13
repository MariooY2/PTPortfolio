function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
      <div className="container-fluid">
        <a className="navbar-brand" id="Home" style={{ fontSize: "25px" }}>
          <img src="Gallery/logof.png" alt="" width="40" height="35" />
          Fitness
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="#About"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Programs">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
