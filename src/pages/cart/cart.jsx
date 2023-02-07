import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'
import { CartItem } from './cart-item';
import './cart.css';
import { PRODUCTS } from '../../data/products';


export const Cart = () => {
  const {getCart} = useContext(ShopContext);
  let data = getCart();
  console.log(data);

  return (
    <div className="cart">
        <div>
            <h1>Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (data[product.id] !== 0) {
                    return <CartItem data={product}/>
                }
        })};
        </div>
    </div>
  )
}
