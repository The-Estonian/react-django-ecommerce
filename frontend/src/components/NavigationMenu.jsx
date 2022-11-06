import React from 'react';
import styles from './NavigationMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink
          to='/cart'
          className={({ isActive }) =>
            isActive ? styles['menu-selected'] : ''
          }
        >
          <i className='fas fa-shopping-cart'></i> Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive ? styles['menu-selected'] : ''
          }
        >
          <i className='fas fa-user'></i> Login
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationMenu;
