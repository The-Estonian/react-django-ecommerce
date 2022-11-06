import React from 'react';
import styles from './Product.module.css';
import Rating from './Rating';

import { Link } from "react-router-dom"

const Product = (props) => {
  return (
    <div className={styles.product}>
      <Link to={`/product/${props.product._id}`}>
        <img src={props.product.image} alt={props.product.name} />
        <h4>{props.product.name}</h4>
      </Link>
      {/* <h5>{props.product.rating} from {props.product.numReviews} reviews</h5> */}
      <Rating
        value={props.product.rating}
        text={`${props.product.numReviews} reviews`}
        color={'#f8e825'}
      />
      <h3>${props.product.price}</h3>
    </div>
  );
};

export default Product;
