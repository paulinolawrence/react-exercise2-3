import React, {useContext} from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Shop = () => {
  const { products,  } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome!</h1>
      </div>
      
      <div className="products">
        {products.map((product) => (     
          <Product data={product} key={product.id}/>
        ))}
      
      </div>
    </div>
  );
};