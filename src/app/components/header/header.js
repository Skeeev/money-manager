import React from 'react';
import injectSheet from 'react-jss';

import logo from 'assets/images/logo.svg';
import styles from './styles';

const Header = ({
  classes
}) => (
  <header className={ classes.header }>
    <a className={ classes.headerLogoLink } href="/">
      <img className={ classes.headerLogo } src={ logo } alt="Logo"/>
    </a>
    <nav className={ classes.headerNav }>
      <ul className={ classes.headerNavList }>
        <li className={ classes.headerNavListItem }>
          <a className={ `${classes.headerNavLink} ${classes.headerNavLinkActive}` } href="">
            Transactions
          </a>
        </li>
        <li className={ classes.headerNavListItem }>
          <a className={ classes.headerNavLink } href="">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default injectSheet(styles)(Header);