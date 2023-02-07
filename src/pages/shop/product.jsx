import React, {useContext} from'react';
import './shop.css';
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
  const {id, productName, price, productImg} = props.data;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="product">
        <img src={productImg}/>
        <div className="description">
            <p>
                <i>{productName}</i><br/>
                <b>${price}</b>
            </p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(props)}>Add to Cart</button>
    </div>
  )
}
