import { LazyLoadImage } from "react-lazy-load-image-component";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import "./ListItem.css";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../redux/cartSlice";

const ListItem = ({ id, image, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleAddItemAmount = () => {
    dispatch(addItem({ id, price }));
  };

  const handleRemoveItemAmount = () => {
    dispatch(removeItem({ id, price }));
  };

  return (
    <section className="list-item">
      <div className="item-image">
        <LazyLoadImage src={image} alt={title} />
      </div>
      <div className="item-title">
        <h3>{title}</h3>
      </div>
      <div className="item-price-btns-container">
        <div className="item-btns">
          <button onClick={handleRemoveItemAmount}>
            <MinusIcon />
          </button>
          <span>{amount}</span>
          <button onClick={handleAddItemAmount}>
            <PlusIcon />
          </button>
        </div>
        <div className="item-price">
          <p>
            <span>{amount}</span> x ${price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListItem;
