import React from "react";
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import { NavBar } from "../../components/navbar";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome!</h1>
      </div>
      
      <div className="products">
        {PRODUCTS.map((product) => (     
          <Product data={product} />
        ))}
      
      </div>
    </div>
  );
};