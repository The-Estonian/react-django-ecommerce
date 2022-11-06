import React from 'react';
import Rating from '../components/Rating';
import products from '../products';
import styles from './ProductInfo.module.css';

import { useParams, Link } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
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
