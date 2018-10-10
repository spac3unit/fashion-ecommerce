import React from "react";
import { Link } from "react-router-dom";
import Burger from "../../components/Burger/BurgerButton";

const Navigation = () => {
  return (
    <nav className="nav header__nav">
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/shop" className="nav__link">
              Shop
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/admin/add-product" className="nav__link">
              CMS
            </Link>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Accessories
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Collections
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              FAQ
            </a>
          </li>
        </ul>
        <Burger />
      </div>
    </nav>
  );
};

export default Navigation;
