import React from 'react';
import { useSelector } from 'react-redux';

import Rating from '../components/Rating';
import styles from './ProductInfo.module.css';

import { useParams, Link } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();
  const productList = useSelector((state) => state.productList.products);
  const filterProduct = productList.find((listItem) => listItem._id === parseInt(id));
  return (
    <div className={styles['product-info']}>
      <div className={styles['product-info-container']}>
        <img src={filterProduct.image} alt={filterProduct.name} />
        <div className={styles['product-info-attr']}>
          <h2>{filterProduct.name}</h2>
          <div className={styles['product-info-rating']}>
            <Rating
              value={filterProduct.rating}
              text={`${filterProduct.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
          <div className={styles['product-info-price']}>
            Price: ${filterProduct.price}
          </div>
          <div className={styles['product-info-description']}>
            Description: {filterProduct.description}
          </div>
        </div>
        <div className={styles['product-info-stock']}>
          <div className={styles['product-info-stock-price']}>
            <p>Price:</p>
            <p>${filterProduct.price}</p>
          </div>
          <div className={styles['product-info-stock-stock']}>
            <p>Stock: </p>
            <p>{filterProduct.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <div className={styles['product-info-stock-add']}>
            <button
              onClick={() => {
                console.log('Added to cart');
              }}
              disabled={filterProduct.countInStock === 0}
            >
              ADD TO CART
            </button>
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
