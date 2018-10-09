import React from "react";
import { Link } from "react-router-dom";

export default ({ id, name, brand, price, image_url, className }) => (
  <li className={`${className} product`}>
    <Link to={`/products/${id}`} className="product__link">
      <img src={image_url} alt="" width="300px" className="product__image" />
    </Link>
    <h4 className="product__title">{name}</h4>
    {/* <p className="product__brand">{brand}</p> */}
    <p className="product__price">{price}</p>
  </li>
);
