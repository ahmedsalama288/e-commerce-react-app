import HomeImage from "../../assets/main.png.avif";
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
      
      <img src={HomeImage} alt="main page hero" property="true"/>
    </section>
  );
};

export default MainImage;
