import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <p className="navbar-brand">Mass Effect Quiz</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link"  to="/">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link to="/ranking" className="nav-link">Ranking</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;