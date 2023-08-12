import PageWrapper from "../ui/PageWrapper";
import CheckoutContainer from "../components/pageComponents/CheckoutPage/CheckoutContainer";
import EmptyCart from "../components/pageComponents/CartPage/EmptyCart";

import { useSelector } from "react-redux";
import {
  selectTotalCartPurchaseAmount,
} from "../redux/cartSlice";

const Checkout = () => {
  const totalCartPurchaseAmount = useSelector(selectTotalCartPurchaseAmount);
  const isCartHasPurchase = totalCartPurchaseAmount >= 1;

  return (
    <PageWrapper>
      {!isCartHasPurchase && <EmptyCart />}
      {isCartHasPurchase && <CheckoutContainer />}
    </PageWrapper>
  );
};

export default Checkout;
