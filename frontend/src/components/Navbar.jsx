import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary end-0" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      color : 'white'
    }}>
      <motion.div 
      initial = {{width : 0}}
      animate = {{width : "100%"}}
      exit = {{x : window.innerWidth}}
      transition = {{duration : 0.5}}
      className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li>
            <button className="btn btn-outline-success" type="button" onClick={() => window.location.href='/signup'}>
              Sign up
            </button>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link" href="/login" role="button" aria-expanded="false">
      Login
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
      </motion.div>
    </nav>
  );
}

export default Navbar;