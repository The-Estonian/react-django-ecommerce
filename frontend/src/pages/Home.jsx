import React from 'react';

import products from '../products';
import styles from './Home.module.css';
import Product from "../components/Product"

const Home = () => {
  return (
    <div className={styles.home}>
      <ul>
        {products.map((item) => (
          <li key={item._id}><Product product={item}/></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
