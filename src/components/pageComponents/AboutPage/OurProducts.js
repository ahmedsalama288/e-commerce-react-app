import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./OurProducts.css";

import imgOne from "../../../assets/menclothes.jpeg";
import imgTwo from "../../../assets/womenclothes.jpg";
import imgThree from "../../../assets/jewelry.webp";
import imgFour from "../../../assets/electronics.jpeg";

const OurProducts = () => {
  return (
    <section className="our-products">
      <h3>Our Products</h3>
      <section className="product-images">
        <div>
          <LazyLoadImage effect="blur" src={imgOne} alt="Product 1" />
          <h5>Mens's Clothing</h5>
        </div>
        <div>
          <LazyLoadImage effect="blur" src={imgTwo} alt="Product 2" />
          <h5>Women's Clothing</h5>
        </div>
        <div>
          <LazyLoadImage effect="blur" src={imgThree} alt="Product 3" />
          <h5>Jewelery</h5>
        </div>
        <div>
          <LazyLoadImage effect="blur" src={imgFour} alt="Product 4" />
          <h5>Electronics</h5>
        </div>
      </section>
    </section>
  );
};

export default OurProducts;
