import MainImage from "../components/home/MainImage";
import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import ProductList from "../components/pageComponents/ProductPage/ProductList";
import "../components/home/HomePageWrapper.css"

import { lazy } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import { Suspense } from "react";

// Lazy Import to ProductList
const ProductListLazy = lazy(() =>
  import("../components/pageComponents/ProductPage/ProductList")
);

const Home = () => {
  const { data: productsList } = useRouteLoaderData("root");
  return (
    <>
      <MainImage />
      <PageWrapper className={"home-page-wrapper"}>
        <PageTitle pageTitleName="Latest Products" />
        <Suspense fallback={<ProductList />}>
          <Await resolve={productsList}>
            <ProductListLazy />
          </Await>
        </Suspense>
      </PageWrapper>
    </>
  );
};

export default Home;
