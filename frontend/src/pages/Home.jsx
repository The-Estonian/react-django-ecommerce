import React, { useState, useEffect } from 'react';

import Product from '../components/Product';
import styles from './Home.module.css';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const datastream = async () => {
      const response = await axios.get('http://127.0.0.1:8000//api/products/');
      setProducts(response.data)
    }
    datastream();
  }, []);

  return (
    <div className={styles.home}>
      <ul>
        {products.map((item) => (
          <li key={item._id}>
            <Product product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
