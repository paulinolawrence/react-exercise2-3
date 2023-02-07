import React from 'react'
import {PRODUCTS as data} from '../../data/products'
import {Product} from "./product";
import './shop.css'

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome!</h1>
      </div>
      <div className="products">
        {data.map((product) => (<Product data={product}/>))}
      </div>
    </div>
  )
}
