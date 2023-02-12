import React from 'react'
import { AddProduct } from './add-product'

export const EditProduct = (initialValue) => {
    console.log(initialValue);
  return (
    <div><AddProduct data={initialValue}/></div>
   
  )
}
