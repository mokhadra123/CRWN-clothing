import { styled } from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(imageUrl) => ` url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 10px 20px;
  position: absolute;
  background-color: white;
  opacity: 0.5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  h2 {
    // margin-top: 10px;
    width: fit-content;
    text-transform: uppercase;
  }
  p {
    width: fit-content;

    margin-top: -10px;
  }
`;

export const DirectoryItemContainer = styled.div`
  height: 240px;
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -webkit-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -moz-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -ms-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -o-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }

  &:last-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;
