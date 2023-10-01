import DirectoryItem from "../DirectoryItems/directorytem.component";
import "./CategoriesComponent.style.scss";
const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/women ",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/men",
  },
];
const CategoriesContainer = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} Category={category} />;
      })}
    </div>
  );
};
export default CategoriesContainer;
