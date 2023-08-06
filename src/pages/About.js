import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import { lazy, Suspense } from "react";
const CompanyHistoryLazy = lazy(() =>
  import("../components/pageComponents/AboutPage/CompanyHistory")
);
const OurProductsLazy = lazy(() =>
  import("../components/pageComponents/AboutPage/OurProducts")
);

const About = () => {
  return (
    <PageWrapper>
      <PageTitle pageTitleName="About Us" />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <CompanyHistoryLazy />
        <OurProductsLazy />
      </Suspense>
    </PageWrapper>
  );
};

export default About;
