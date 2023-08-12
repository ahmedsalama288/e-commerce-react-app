import BillingAddress from "./BillingAddress";
import OrderSummary from "../CartPage/OrderSummary";

import "./CheckoutContainer.css";

const CheckoutContainer = () => {
  return (
    <section className="chechout-container">
      <BillingAddress />
      <OrderSummary showCheckoutButton={false}/>
    </section>
  );
};

export default CheckoutContainer;
