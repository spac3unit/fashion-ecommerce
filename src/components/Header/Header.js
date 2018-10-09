import React from "react";
// import './styles.scss'
const Header = () => {
  return (
    <header className="header">
      <div className="header__search">
        <form className="search-form">
          <input
            type="text"
            onBlur={() => {
              const placeholderText = document.querySelector(
                "span.placeholder"
              );
              placeholderText.style.visibility = "visible";
            }}
            onFocus={() => {
              const placeholderText = document.querySelector(
                "span.placeholder"
              );
              placeholderText.style.visibility = "hidden";
            }}
          />
          <span className="placeholder">
            Search <span className="important">e.g footwear</span>
          </span>
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
      <div className="header__logo">
        <img
          src="https://www.shoppinginbirmingham.com/app/uploads/2018/05/SIB_Logo.svg"
          alt=""
        />
      </div>
      <div className="social-icons header__list">
        <a href="" className="social-icons__link">
          <i className="fas fa-sign-out-alt" />
        </a>
        <a href="" className="social-icons__link">
          <i className="fas fa-shopping-bag" />
        </a>
        <a href="" className="social-icons__link">
          <i className="fas fa-search" />
        </a>
      </div>
      <div className="social-icons header__list">
        <a href="" className="social-icons__link">
          <i className="fab fa-vk" />
        </a>
        <a href="" className="social-icons__link">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="social-icons__link">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </header>
  );
};

export default Header;
