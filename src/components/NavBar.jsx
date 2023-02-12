import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";
import Badge from "@material-ui/core/Badge";
import { HowToReg } from '@material-ui/icons';

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  let totalItems = 0;
  for (const item in cartItems){
    if (cartItems[item] > 0){
      totalItems += cartItems[item];
    }
  }

  return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Badge overlap='rectangular' color="secondary" badgeContent={totalItems}>
              <Link to="/cart"><ShoppingCart size={35} /></Link>
            </Badge>
        </div>
        <div className="admin">
            <Link to="/admin"><HowToReg size={50} /> Admin</Link>
        </div>
    </div>
  )
}
