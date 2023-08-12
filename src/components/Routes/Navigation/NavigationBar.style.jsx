import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 60px;
  padding: 20px;
  margin-bottom: 10px;
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 20px;
  font-weight: 600;
  cursor: pointer;
`;
// .navigation {

// }
// .navigation .logo-container {
//   margin: 30px;
// }
// .navigation .logo {
//   height: 80%;
//   width: 60px;
// }
// .links-container {
//   display: flex;
//   align-items: center;
// }
// .nav-link {
//   padding: 20px;
//   font-weight: 600;
//   cursor: pointer;
// }
