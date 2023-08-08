import Logo from "./Logo";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";
import UserActions from "./UserActions";
import MobileNavList from "./MobileNavList";
import MenuIcon from "./icons/MenuIcon";
import "./Header.css";

import {
  userLogin,
  userLogout,
  selectIsUserLogin,
} from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../utils/isLoggedIn";

const Header = () => {
  const [isMobileNavCloseed, setIsMobileNavCloseed] = useState(true);

  const handleCloseMobileNav = () => {
    setIsMobileNavCloseed((preValue) => !preValue);
  };

  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsUserLogin);

  useEffect(() => {
    const handleUserLoginState = () => {
      const isLogin = isLoggedIn();
      if (isLogin) dispatch(userLogin());
      else dispatch(userLogout());
    };
    handleUserLoginState();
  }, [dispatch]);

  return (
    <header>
      <section className="header-wrapper">
        <Logo />
        <section className="navigation-links-btns-containner">
          {isMobileNavCloseed && (
            <MenuIcon
              onclick={handleCloseMobileNav}
            />
          )}
          <MainNav />
          <UserActions isUserLoggedIn={isUserLoggedIn} />
          <MobileNavList
            isUserLoggedIn={isUserLoggedIn}
            isMobileNavCloseed={isMobileNavCloseed}
            handleCloseNav={handleCloseMobileNav}
          />
        </section>
      </section>
    </header>
  );
};

export default Header;
