import Logo from "./Logo";
import MainNav from "./MainNav";
import { useState } from "react";
import UserActions from "./UserActions";
import MobileNavList from "./MobileNavList";
import MenuIcon from "./icons/MenuIcon";
import "./Header.css";

const Header = () => {
  const [isMobileNavCloseed, setIsMobileNavCloseed] = useState(true);

  const handleCloseMobileNav = () => {
    setIsMobileNavCloseed((preValue) => !preValue);
  };

  return (
    <header>
      <section className="header-wrapper">
        <Logo />
        <section className="navigation-links-btns-containner">
          {isMobileNavCloseed && <MenuIcon onclick={handleCloseMobileNav} />}
          <MainNav />
          <UserActions />
          <MobileNavList
            isMobileNavCloseed={isMobileNavCloseed}
            handleCloseNav={handleCloseMobileNav}
          />
        </section>
      </section>
    </header>
  );
};

export default Header;
