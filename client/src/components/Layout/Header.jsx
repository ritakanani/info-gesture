import React from 'react'

import { Link } from "react-router-dom";
const Header = (props) => {
  return (
  <nav bg="light" expand="lg">
  <div className="container">
    <nav href="#home">React-Bootstrap</nav>
    <nav aria-controls="basic-nav-nav" />
    <nav id="basic-nav-nav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/link">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
          <li className="nav-item">
          <Link to="/services"> Services</Link>
         </li>

        </li>
      </ul>
    </nav>
  </div>
</nav>
  )
}

export default Header;