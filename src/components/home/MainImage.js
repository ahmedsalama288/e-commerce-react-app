import PageWrapper from "../../ui/PageWrapper";
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
      
      <img src="/main.png.avif" alt="main page hero" rel="preload"/>
    </section>
  );
};

export default MainImage;
