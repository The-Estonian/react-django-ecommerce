import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import NavigationMenu from './NavigationMenu';
import logo from '../assets/images/logo.png';

const Header = () => {
  const activeConnection = useSelector(
    (state) => state.productList.dataFetching
  );
  return (
    <nav className={styles.header}>
      <Link to='/'>
        <div className={styles['logo-container']}>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <h1>{activeConnection}</h1>
      <NavigationMenu />
    </nav>
  );
};

export default Header;
