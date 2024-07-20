import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary end-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/login" role="button"  aria-expanded="false">
                Login/Sign up
              </a>
              {/* <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">User</a></li>
                <li><a className="dropdown-item" href="#">Admin</a></li>
                <li><hr className="dropdown-divider" /></li>
              </ul> */}
            </li>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;