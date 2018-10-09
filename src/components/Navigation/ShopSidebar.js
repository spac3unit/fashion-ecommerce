import React from "react";
import { Link } from "react-router-dom";

const ShopSidebar = () => {
  return (
    <div className="filter">
      <div className="filter__group filter__group--size">
        <h4 className="filter__title">Brands</h4>
        <div>
          <ul className="filter__list">
            <li>
              <Link to="#">Adidas</Link>
            </li>
            <li>
              <Link to="#">New Balance</Link>
            </li>
            <li>
              <Link to="#">Nike</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="filter__group filter__group--size">
        <h4 className="filter__title">Colors</h4>
        <div>
          <ul className="filter__list">
            <li>
              <Link to="#">White</Link>
            </li>
            <li>
              <Link to="#">Black</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;

const Widgets = () => (
  <div className="widgets">
    <div className="categories">Sneakers Accessories Jackets</div>
    <div className="filter">Colors Brands Size</div>
  </div>
);
