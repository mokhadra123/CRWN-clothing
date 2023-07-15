import { createContext, useContext, useState } from "react";

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => useContext(cartContext);

export default CartProvider;
