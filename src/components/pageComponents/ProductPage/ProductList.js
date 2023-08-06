import FilterBar from "./FilterBar";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { useAsyncValue } from "react-router-dom";

import "./ProductList.css";

const ProductList = () => {
  const [selectedFilter, setSelectedFilter] = useState({ id: 0, name: "all" });
  const productsList = useAsyncValue();
  const isLoading = productsList === undefined;

  if (isLoading) {
    const productsItemsNumber = 20;
    const nullProductsList = Array(productsItemsNumber).fill(0);

    const renderedNullProducts = nullProductsList.map((_, index) => (
      <ProductItem
        key={index}
        id={null}
        title={null}
        description={null}
        image={null}
        price={null}
      />
    ));
    return <section className="product-list">{renderedNullProducts}</section>;
  }

  let renderedProducts = productsList.filter(
    (product) =>
      selectedFilter.name === "all" || product.category === selectedFilter.name
  );

  renderedProducts = renderedProducts.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  ));

  const handleSelectedFilterChange = (newSelectedFilter) => {
    setSelectedFilter(newSelectedFilter);
  };

  return (
    <>
      <FilterBar
        activeFilter={selectedFilter.id}
        onFilterChange={handleSelectedFilterChange}
      />
      <section className="product-list">{renderedProducts}</section>
    </>
  );
};

export default ProductList;
