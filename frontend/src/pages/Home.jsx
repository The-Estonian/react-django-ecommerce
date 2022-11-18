import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../components/Product';
import styles from './Home.module.css';

const Home = () => {
  const data = useSelector((state) => state.productList.products);
  
  return (
    <div className={styles.home}>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <Product product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
