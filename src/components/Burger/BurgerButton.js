import React from "react";
import "./BurgerButton.scss";

export default () => {
  const toggleBurger = e => {
    document.getElementById("burgerMenu").classList.toggle("is-active");
    e.stopPropagation();
  };
  return (
    <div className="burger">
      <input type="checkbox" id="toggle-text-on-left" onClick={toggleBurger} />
      <label htmlFor="toggle-text-on-left">
        <i />
      </label>
      <em />
    </div>
  );
};
