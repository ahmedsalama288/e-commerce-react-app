import HomeImage from "../../assets/main.png.jpg";
import PageWrapper from "../../ui/PageWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./MainImage.css";

const MainImage = () => {
  return (
    <section className="main-image">
      <PageWrapper className="main-description">
        <h4>New Season Arrivals</h4>
        <p>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </PageWrapper>
      <LazyLoadImage
        src={HomeImage}
        alt="Description of the home"
        effect="blur"
        visibleByDefault={true}
      />
    </section>
  );
};

export default MainImage;
