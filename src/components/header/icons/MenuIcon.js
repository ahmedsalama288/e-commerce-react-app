import React from "react";
import { selectTotalProductsItemsAmount } from "../../../redux/cartSlice";
import { useSelector } from "react-redux";
import "./MenuIcon.css";

const MenuIcon = ({ onclick }) => {
  const itemsAmount = useSelector(selectTotalProductsItemsAmount);

  return (
    <>
      <span onClick={onclick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </span>
      <span id="icon-items-amount" onClick={onclick}>
        {itemsAmount < 10 && itemsAmount !== 0
          ? `0${itemsAmount}`
          : itemsAmount}
      </span>
    </>
  );
};

export default MenuIcon;
