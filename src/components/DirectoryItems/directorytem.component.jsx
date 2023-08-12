import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./DirectoryItem.style";
const DirectoryItem = ({ Category }) => {
  const { title, imageUrl, route } = Category;
  const navigate = useNavigate();

  const onNagigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={onNagigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
