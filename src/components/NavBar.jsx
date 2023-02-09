import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";
import Badge from "@material-ui/core/Badge";
import {UserCircle} from 'phosphor-react';

export const NavBar = () => {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  let totalItems = 0;
  for (const item in cartItems){
    if (cartItems[item] > 0){
      totalItems += cartItems[item];
    }
  }
  console.log(totalItems);

  return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Badge color="secondary" badgeContent={totalItems}>
              <Link to="/cart"><ShoppingCart size={30} /></Link>
            </Badge>
        </div>
    </div>
  )
}
