import "./CheckOut.style.scss";
import { useCartContext } from "../../../context/Cart.context";
import CheckoutItem from "../../CheckoutItem/CheckoutItem.component";

const CheckOut = () => {
  const { cartItems, totalPrice } = useCartContext();

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total Price :{totalPrice}</span>
    </div>
  );
};

export default CheckOut;
