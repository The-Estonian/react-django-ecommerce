import React from 'react'
import Card from "./Card"

const Product = (props) => {
  return (
    <Card>
        <a href={`/product/${props.product._id}`}>
            <img src={props.product.image} alt={props.product.name}/>
        </a>
    </Card>
  )
}

export default Product