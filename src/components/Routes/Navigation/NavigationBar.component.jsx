import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from "../../../assets/crwn.svg";
import { useUserContext } from "../../../context/User.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../CartIcon/CartIcon.component";
import CartDropDown from "../../CartDropDown/CartDropDown.component";
import { useCartContext } from "../../../context/Cart.context";
import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
  NavLink,
} from "./NavigationBar.style";
const Navbar = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwnlogo style={{ height: "50px", width: "100px" }} />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SING OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
