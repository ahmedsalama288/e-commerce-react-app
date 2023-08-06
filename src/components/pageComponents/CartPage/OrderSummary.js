import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import "./OrderSummary.css";

import {
  selectTotalPrice,
  selectTotalProductsItemsAmount,
} from "../../../redux/cartSlice";
import { useSelector } from "react-redux";

const OrderSummary = ({ showCheckoutButton = true }) => {
  const totalProductsItemsAmount = useSelector(selectTotalProductsItemsAmount);
  const totalProductsPrice = useSelector(selectTotalPrice);
  const shippingPrice = 30;
  const totalAmoutPrice = totalProductsPrice + shippingPrice;

  return (
    <section className="order-summary">
      <h2>Order Summary</h2>
      <div>
        <p>
          <span>Products {`(${totalProductsItemsAmount})`}</span>
          <span>${parseFloat(totalProductsPrice.toFixed(2))}</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>${shippingPrice}</span>
        </p>
      </div>
      <div>
        <p id="total-amount">
          <span>Total amount</span>
          <span>${parseFloat(totalAmoutPrice.toFixed(2))}</span>
        </p>
      </div>
      {showCheckoutButton && (
        <div className="go-to-checkout">
          <Link>
            <Button>Go to checkout</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default OrderSummary;
