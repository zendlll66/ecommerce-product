// context/CartContext.tsx
"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  cartCount: 0,
  addToCart: (quantity: number) => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity: number) => {
    setCartCount(prev => prev + quantity);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);