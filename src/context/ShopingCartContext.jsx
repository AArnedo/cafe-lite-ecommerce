import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShopingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
