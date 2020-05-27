import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarStyles } from '../styledComponents';
import logo from '../spotifyLogo.png';

export default function NavBar() {
  return (
    <NavBarStyles>
      <header>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-links">
          <Link to="">About</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </header>
    </NavBarStyles>
  );
}
