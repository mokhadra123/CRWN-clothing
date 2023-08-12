import "./ProductCard.style.scss";
import Button from "../button/Button.component";
import { useCartContext } from "../../context/Cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/Button.component";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useCartContext();
  const { id, name, price, imageUrl } = product;
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
