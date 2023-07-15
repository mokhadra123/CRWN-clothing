import { useProductsContext } from "../../../context/Products.context";
import ProductCard from "../../ProductCard/ProductCard.component";
import "./Shop.style.scss";
const Shop = () => {
  const { products } = useProductsContext();
  return (
    <div className="products-card-container">
      {products.map((product) => (
        <ProductCard id={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
