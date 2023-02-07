import React, {createContext, useState} from 'react'
import {NotificationManager} from 'react-notifications';

export const ShopContext = createContext(null);

export const userCart = [];

export const ShopContextProvider = (props) => {
    const getCart = () => {
        return [...userCart];
    };

    const addToCart = (product) => {
        if (userCart.includes(product)) {
            NotificationManager.warning('The item is already in the Cart!', 'Please select another item.', 3000);
            console.log(getCart());
        } else {
            userCart.push(product);
            console.log(getCart());
            NotificationManager.success('Done adding to cart.', 'Success!', 3000);
        }
    };
    
    const removeFromCart = (itemId) => {
       userCart.splice(userCart.indexOf(itemId), 1);
    };

    const contextValue = {getCart, addToCart, removeFromCart} 

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
