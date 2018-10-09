import React, { Component } from "react";
import "./BurgerButton.scss";

class Burger extends Component {
  constructor() {
    super();
    this.burgerBtn = React.createRef();
  }

  toggleBurger = e => {
    // this.burgerBtn.current.classList.toggle('is-active')
    document.getElementById("overmenu").classList.toggle("is-active");
    // e.preventDefault()
    e.stopPropagation();
  };
  render() {
    return (
      <div className="burger__variants">
        <div>
          <input
            type="checkbox"
            id="toggle-text-on-left"
            onClick={this.toggleBurger}
          />
          <label htmlFor="toggle-text-on-left">
            <i />
          </label>
          <em />
        </div>
        {/* <a
          href="#a"
          className="menu-button"
          ref={this.burgerBtn}
          onClick={this.toggleBurger}>
          <span className="burger-icon" />
        </a> */}
        {/* <p>
          <input type="checkbox" id="toggle-defaults" />
          <label htmlFor="toggle-defaults">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-custom-size" />
          <label htmlFor="toggle-custom-size">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-custom-animation" />
          <label htmlFor="toggle-custom-animation">
            <i />
          </label>
          <em />
        </p>
        <p>
          <input type="checkbox" id="toggle-radius" />
          <label htmlFor="toggle-radius">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-padding" />
          <label htmlFor="toggle-padding">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-text-on-right" />
          <label htmlFor="toggle-text-on-right">
            <i />
          </label>
          <em />
        </p> */}

        {/* <p>
          <input type="checkbox" id="toggle-tint" />
          <label htmlFor="toggle-tint">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-solid-background" />
          <label htmlFor="toggle-solid-background">
            <i />
          </label>
          <em />
        </p>

        <p>
          <input type="checkbox" id="toggle-noanim" />
          <label htmlFor="toggle-noanim">
            <i />
          </label>
          <em />
        </p>

        <p className="dark">
          <input type="checkbox" id="toggle-above-dark-background" />
          <label htmlFor="toggle-above-dark-background">
            <i />
          </label>
          <em />
        </p> */}
      </div>
    );
  }
}

export default Burger;
