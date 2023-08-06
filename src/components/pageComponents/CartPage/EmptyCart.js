import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import ArrowIcon from "./icons/ArrowIcon";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <h2>Your Cart is Empty</h2>
      <Link  className="continue-shopping-link" to="/products">
        <Button>
          <ArrowIcon />
          Continue Shopping
        </Button>
      </Link>
    </section>
  );
};

export default EmptyCart;
//
