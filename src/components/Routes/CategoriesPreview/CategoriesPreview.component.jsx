import { Fragment } from "react";
import { useCategoriesContext } from "../../../context/Categories.context";
import CategoryPreview from "../../CategoryPreview/CategoryPreview.component";
const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesContext();
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview products={products} title={title} key={title} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
