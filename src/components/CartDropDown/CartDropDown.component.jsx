import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/Cart.context";
import CartItem from "../CartItem/CartItem.component";
import Button from "../button/Button.component";
import {
  CartDropdownConatiner,
  EmptyMessage,
  CartImtes,
} from "./CartDropDown.style";
import React from "react";

const CartDropDown = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const goToCheckoutHandlre = () => {
    navigate("checkout");
  };

  return (
    <CartDropdownConatiner>
      <CartImtes>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartImtes>

      <Button onClick={goToCheckoutHandlre}>GO TO CHECK OUT</Button>
    </CartDropdownConatiner>
  );
};

export default CartDropDown;
