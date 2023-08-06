import SVGIcon from "./SVGIcon";
import Button from "../../../ui/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useAsyncValue } from "react-router-dom";
import "./ProductInfo.css";

import { addItem } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductInfo = () => {
  const { productData } = useAsyncValue();
  const {
    id,
    title,
    category,
    description,
    image,
    price,
    rating: { rate },
  } = productData;

  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(addItem({ id, title, image, price }));
  };

  return (
    <article className="product-info">
      <div className="product-info-img-container">
        <LazyLoadImage effect="blur" src={image} alt={title} />
      </div>
      <div className="product-detailed-info">
        <h4 id="category">{category}</h4>
        <h1 id="title">{title}</h1>
        <p id="rating">
          <span>{rate}&nbsp;</span>
          <span>
            <SVGIcon />
          </span>
        </p>
        <h3 id="price">${price}</h3>
        <p id="description">{description}</p>
        <div id="action-buttons">
          <Button onClick={handleAddItemToCart}>Add to Cart</Button>
          <Link to="/cart">
            <Button>Go to Cart</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductInfo;
