import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/Cart.context";
import CartItem from "../CartItem/CartItem.component";
import Button from "../button/Button.component";
import "./CartDropDown.style.scss";
import React from "react";

const CartDropDown = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  const goToCheckoutHandlre = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandlre}>GO TO CHECK OUT</Button>
    </div>
  );
};

export default CartDropDown;
