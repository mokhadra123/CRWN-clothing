import { createContext, useContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const productsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
export const useProductsContext = () => useContext(productsContext);
export default ProductsProvider;
