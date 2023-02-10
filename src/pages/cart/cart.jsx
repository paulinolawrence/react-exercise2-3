import React, { useContext, useState  } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { MyModal } from "./mymodal";
import Button from 'react-bootstrap/Button';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2);
  const [modalShow, setModalShow] = useState(false);
  //checkout();
  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div>
          <br/>
          <h2>-Your Cart Items-</h2>
          <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id}/>;
            }
          })}
          </div>
          <div className="checkout">
            <h4> Subtotal Price: ${totalAmount} </h4>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <Button variant="primary" onClick={() => {setModalShow(true);}}>Checkout</Button>           
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty!</h1>
      )}
    </>
  );
};
