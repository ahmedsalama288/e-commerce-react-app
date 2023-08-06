import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import ProductList from "../components/pageComponents/ProductPage/ProductList";
import { Await, defer, useRouteLoaderData } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy Import to ProductList
const ProductListLazy = lazy(() =>
  import("../components/pageComponents/ProductPage/ProductList")
);

const Products = () => {
  const { data: productsList } = useRouteLoaderData("root");

  return (
    <PageWrapper>
      <PageTitle pageTitleName="Latest Products" />
      <Suspense fallback={<ProductList />}>
        <Await resolve={productsList}>
          <ProductListLazy />
        </Await>
      </Suspense>
    </PageWrapper>
  );
};

export default Products;

export const getAllProductsLoader = async () => {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Response("Failed to fetch products");
    }
    const data = await response.json();

    return defer({ data });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};
