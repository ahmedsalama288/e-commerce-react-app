import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductItem.css";

import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";

const ProductItem = ({ id, title, description, image, price }) => {
  const isLoading = !(id && title && description && image && price);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, title, image, price }));
  };

  return (
    <section className="product-item">
      {isLoading && (
        <SkeletonTheme baseColor="#F5F5F5" highlightColor="#E0E0E0">
          <Skeleton width={1000} height={400} />
        </SkeletonTheme>
      )}

      {!isLoading && (
        <>
          <Link to={`/products/${id}`}>
            <div className="img-container">
              <LazyLoadImage src={image} alt={title} effect="blur" />
            </div>
            <div className="item-title-description">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="product-price">
              <p>$&nbsp;{price}</p>
            </div>
          </Link>

          <div className="product-action-btns-container">
            <Link to={`/products/${id}`}>
              <Button>Buy Now</Button>
            </Link>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductItem;
