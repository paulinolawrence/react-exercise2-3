import React from 'react'
import './cart.css';

export const CartItem = (props) => {
  const {id, productName, price, productImg} = props.data;
  console.log('props', props);

  return (
    <div className="cartItem">
        <img src={productImg}/>
        <div className="description">
            <p> <b>{productName}</b> </p>
            <p> ${price}</p>
        </div>
    </div>
  )
}
