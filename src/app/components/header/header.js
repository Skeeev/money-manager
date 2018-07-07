import React from 'react';

import logo from 'assets/images/logo.png';
import './header.css';

const Header = () => (
  <header>
    <a href="#">
      <img src={logo} alt="logo"/>
    </a>
    <div style={{font: '400 2em OpenSans, sans-serif'}}>test font</div>
  </header>
);

export default Header;