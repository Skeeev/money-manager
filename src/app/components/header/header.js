import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import injectSheet from 'react-jss';

import logo from 'assets/images/logo.svg';
import styles from './styles';

const Header = ({
  classes
}) => (
  <header className={ classes.header }>
    <Link
      to="/transactions"
      className={ classes.headerLogoLink }
    >
      <img className={ classes.headerLogo } src={ logo } alt="Logo"/>
    </Link>
    <nav className={ classes.headerNav }>
      <ul className={ classes.headerNavList }>
        <li className={ classes.headerNavListItem }>
          <NavLink
            to="/transactions"
            className={ classes.headerNavLink }
            activeClassName={ classes.headerNavLinkActive }
          >
            Transactions
          </NavLink>
        </li>
        <li className={ classes.headerNavListItem }>
          <NavLink
            to="/settings"
            className={ classes.headerNavLink }
            activeClassName={ classes.headerNavLinkActive }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default injectSheet(styles)(Header);