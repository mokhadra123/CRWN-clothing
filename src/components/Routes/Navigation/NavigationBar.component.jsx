import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from "../../../assets/crwn.svg";
import "./NavigationBar.style.scss";
import { useUserContext } from "../../../context/User,context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navbar = () => {
  const { currentUser } = useUserContext();

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SING OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
