import PageWrapper from "../ui/PageWrapper";
import { lazy, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
// import ProductInfo from "../components/pageComponents/ProductDetailPage/ProductInfo";
const ProductInfoLazy = lazy(() =>
  import("../components/pageComponents/ProductDetailPage/ProductInfo")
);

const ProductDetail = () => {
  const productData = useLoaderData();

  return (
    <PageWrapper>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ...</p>}>
        <Await resolve={productData}>
          <ProductInfoLazy />
        </Await>
      </Suspense>
    </PageWrapper>
  );
};

export default ProductDetail;

export const productDetailLoader = async ({ params }) => {
  const { productId } = params;
  const url = `https://fakestoreapi.com/products/${productId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Response("Failed to fetch products");
    }

    const data = await response.json();
    return defer({ productData: data });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};
