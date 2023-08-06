import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import EmptyCart from "../components/pageComponents/CartPage/EmptyCart";
import ListItems from "../components/pageComponents/CartPage/ListItems";

import { useSelector } from "react-redux";
import {
  selectAllItems,
  selectTotalCartPurchaseAmount,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectAllItems);
  const totalCartPurchaseAmount = useSelector(selectTotalCartPurchaseAmount);
  const isCartHasPurchase = totalCartPurchaseAmount >= 1;

  return (
    <PageWrapper>
      <PageTitle pageTitleName="Cart" />
      {!isCartHasPurchase && <EmptyCart />}
      {isCartHasPurchase && <ListItems cartItems={cartItems} />}
    </PageWrapper>
  );
};

export default Cart;
