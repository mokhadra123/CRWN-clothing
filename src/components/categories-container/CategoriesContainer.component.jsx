import CategoryItem from "../category-Items/CategoryItem.component";
import "./CategoriesComponent.style.scss";
const CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} Category={category} />;
      })}
    </div>
  );
};
export default CategoriesContainer;
