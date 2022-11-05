import React from 'react';
import styles from './Product.module.css';
import Rating from './Rating';

const Product = (props) => {
  return (
    <div className={styles.product}>
      <a href={`/product/${props.product._id}`}>
        <img src={props.product.image} alt={props.product.name} />
        <h4>{props.product.name}</h4>
      </a>
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
