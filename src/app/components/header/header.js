import React from 'react';

import logo from 'assets/images/logo.png';
import './header.css';

const Header = () => (
  <header className="header">
    <a className="header__logo-link" href="/">
      <img className="header__logo" src={logo} alt="Logo"/>
    </a>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li>
          <a className="header__nav-link" href="">
            Transactions
          </a>
        </li>
        <li>
          <a className="header__nav-link" href="">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;