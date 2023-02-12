import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

const getDefaultCart = (data) => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState(getDefaultCart(products));
  console.log('outside');
  console.log(products);
  console.log(cartItems);

  const addProduct = (product) => {
    setProducts([
      ...products,
      { id: products.length + 1 , ...product, },
    ]);
    setCartItems((prev) => ({ ...prev, [products.length + 1]: 0}));
  };

  const editProduct = (id, editProduct) => {
    setProducts(products.map((product) => {
        if (product.id === id) {
          return {
            id,
            ...editProduct,
          };
        }
        return product;
      })
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    const cartItemCount = cartItems[itemId];
    if (cartItemCount == 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success('Done adding to cart!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
    } else {
      toast.warning('This item is already in the cart.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  const increaseQty = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }));
  };

  const decreaseQty = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(products));
    toast.success('Done Checking out!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      });
  };

  const contextValue = {
    products,
    cartItems,
    addProduct,
    deleteProduct,
    addToCart,
    increaseQty,
    updateCartItemCount,
    removeFromCart,
    decreaseQty,
    getTotalCartAmount,
    checkout,
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};