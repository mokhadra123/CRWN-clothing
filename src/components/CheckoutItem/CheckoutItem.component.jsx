import "./CheckoutItem.style.scss";
import { useCartContext } from "../../context/Cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, decrementItemFromCart, removeItemFromCart } =
    useCartContext();

  const increamentItemToCart = () => addItemToCart(cartItem);
  const decreamentItemToCart = () => decrementItemFromCart(cartItem);
  const clearItemFromCart = () => removeItemFromCart(cartItem);

  const priceOfItem = price * quantity;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreamentItemToCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increamentItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{priceOfItem}</span>

      <div className="remove-button" onClick={clearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
