import React from "react";
import Preloader from "../../components/Preloader/LinearProgress";
import ProductsItem from "./ProductsItem";

export default ({ items, className }) => {
  return (
    <div className="products">
      <ul className="products__list">
        {!items && <Preloader />}
        {items && items.map(item => <ProductsItem {...item} />)}
      </ul>
    </div>
  );
};
