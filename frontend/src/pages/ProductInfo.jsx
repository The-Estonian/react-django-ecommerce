import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating';
import styles from './ProductInfo.module.css';
import axios from 'axios';

import { useParams, Link } from 'react-router-dom';

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const datastream = async () => {
      const response = await axios.get(`http://127.0.0.1:8000//api/products/${id}`);
      setProduct(response.data)
    }
    datastream();
  }, []);
  return (
    <div className={styles['product-info']}>
      <div className={styles['product-info-container']}>
        <img src={product.image} alt={product.name} />
        <div className={styles['product-info-attr']}>
          <h2>{product.name}</h2>
          <div className={styles['product-info-rating']}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
          <div className={styles['product-info-price']}>
            Price: ${product.price}
          </div>
          <div className={styles['product-info-description']}>
            Description: {product.description}
          </div>
        </div>
        <div className={styles['product-info-stock']}>
          <div className={styles['product-info-stock-price']}>
            <p>Price:</p>
            <p>${product.price}</p>
          </div>
          <div className={styles['product-info-stock-stock']}>
            <p>Stock: </p>
            <p>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <div className={styles['product-info-stock-add']}>
            <button onClick={() => {console.log("Added to cart");}} disabled={product.countInStock === 0}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default ProductInfo;
