import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImg} alt="Not available"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div>
        {(cartItems[id] === 0)?  <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart       
        </button>
        :
        <div className="itemAdded">Item Added</div>
        }
      </div>
    </div>
  );
};