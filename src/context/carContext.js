import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CarContext = createContext({ cart: [] });

export const CarProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log("Cart:", cart);
    }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantity }]);
    } else {
      console.error('El item ya está en el carrito');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.item.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.item.id === id);
  };

  const totalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CarContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalItems }}
    >
      {children}
    </CarContext.Provider>
  );
};
