import { styled } from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/Button.style";

export const CartDropdownConatiner = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  scrollbar-width: thin;
  scrollbar-color: blue orange;

  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 70px auto;
`;

export const CartImtes = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
