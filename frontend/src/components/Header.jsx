import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import NavigationMenu from './NavigationMenu';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link to='/'>
        <div className={styles["logo-container"]}>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Header;
