import React from 'react';
import { Link } from 'react-router-dom';
import { UserNavBarStyles } from '../styledComponents';
import logo from '../spotifyLogo.png';

export default function UserNavBar() {
  return (
    <UserNavBarStyles>
      <header>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-links">
          <Link to="/login">Log Out</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/songs">Search</Link>
        </div>
      </header>
    </UserNavBarStyles>
  );
}
