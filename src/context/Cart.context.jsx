import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
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

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newTotalPrice,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const decrementItemFromCart = (productToRemove) => {
    const newCartItems = decrementCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (removeItem) => {
    const newCartItems = removeCartItem(cartItems, removeItem);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    decrementItemFromCart,
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
