import Button from "../button/Button.component";
import "./CartDropDown.style.scss";
import React from "react";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <Button buttonType="">GO TO CHECK OUT</Button>
    </div>
  );
};

export default CartDropDown;
