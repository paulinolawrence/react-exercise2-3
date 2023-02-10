import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import {Trash} from 'phosphor-react';

export const CartItem = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { cartItems, increaseQty, decreaseQty, updateCartItemCount, removeFromCart} =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImg} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => decreaseQty(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount((e.target.value), id)}
          />
          <button onClick={() => increaseQty(id)}> + </button> 
        </div>
        <div className="trash">
          <button onClick={() => removeFromCart(id)}><Trash color="red" size={35}/></button>
        </div>
      </div>
     
    </div>
  );
};