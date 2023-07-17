import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, productToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToRemove.id
  );

  //check if quantity is equal to 1 , if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  //return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (cartItems, removeItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const decrementItemFromCart = (productToRemove) => {
    setCartItems(decrementCartItem(cartItems, productToRemove));
  };
  const removeItemFromCart = (removeItem) => {
    setCartItems(removeCartItem(cartItems, removeItem));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    decrementItemFromCart,
    setCartItems,
    removeItemFromCart,
    totalPrice,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => useContext(cartContext);

export default CartProvider;

/*
product
{
  id ,
  name ,
  price ,
  imageUrl
}

cartItem
{
  id ,
  name ,
  price ,
  imageUrl,
  quantity
}
*/
