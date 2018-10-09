import React from "react";
import ProductsItem from "./ProductsItem";
const ProductsGrid = ({ items, className }) => {
  const products = items.map(item => (
    <ProductsItem {...item} className={`${className}__item`} />
  ));
  return (
    <div className={className}>
      <ul className={`${className}__list`}>{products}</ul>
    </div>
  );
};

export default ProductsGrid;
