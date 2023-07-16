import "./ProductCard.style.scss";
import Button from "../button/Button.component";
import { useCartContext } from "../../context/Cart.context";

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
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
