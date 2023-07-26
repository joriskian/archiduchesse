import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Archiduchesse</span>
        <div>Le meilleurs de la chaussette</div>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/account">
                Account
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                se connecter
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/register">
                s'enregistrer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
