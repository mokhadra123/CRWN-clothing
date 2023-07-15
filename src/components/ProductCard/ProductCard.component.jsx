import "./ProductCard.style.scss";
import Button from "../button/Button.component";
const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">ADD TO CARD</Button>
    </div>
  );
};

export default ProductCard;
