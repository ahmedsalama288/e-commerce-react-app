import "./ListItems.css";
import ListItem from "./ListItem";
import OrderSummary from "./OrderSummary";

const ListItems = ({ cartItems }) => {
  const renderedItems = cartItems.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <section className="list-items">
      <section className="list-items-container">
        <h2>List Items</h2>
        {renderedItems}
      </section>
      <OrderSummary />
    </section>
  );
};

export default ListItems;
