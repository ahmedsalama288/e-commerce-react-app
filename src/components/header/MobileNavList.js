import CloseIcon from "./icons/CloseIcon";
import { NavLink } from "react-router-dom";
import "./MobileNavList.css";

import { selectTotalProductsItemsAmount } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const MobileNavList = ({ isMobileNavCloseed, handleCloseNav }) => {
  const itemsAmount = useSelector(selectTotalProductsItemsAmount);

  const handleUlItemClick = (event) => {
    // Check if the clicked element is an li
    console.log(event.target.tagName);
    if (event.target.tagName.toLowerCase() === "a") {
      setTimeout(() => {
        handleCloseNav();
      }, 250);
    }
  };

  return (
    !isMobileNavCloseed && (
      <section className="mobile-nav-list">
        <nav>
          <CloseIcon onClick={handleCloseNav} />
          <ul onClick={handleUlItemClick}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Cart{` (${itemsAmount})`}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="overlay" onClick={handleCloseNav}></div>
      </section>
    )
  );
};

export default MobileNavList;
