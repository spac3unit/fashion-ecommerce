import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./OverlayMenu.scss";

const OverlayMenu = ({ open, children, right, onClose }) => (
  <div
    className={classnames("overlay-menu", {
      "is-right": right,
      "is-open": open
    })}
  >
    <div className="overlay-menu__overlay" onClick={onClose} />
    <div
      className="overlay-menu__wrap"
      onClick={e => e.target.tagName.toLowerCase() === "a" && onClose()}
    >
      {children}
    </div>
  </div>
);

OverlayMenu.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  onClose: PropTypes.func
};

OverlayMenu.defaultProps = {
  right: false,
  open: false,
  onClose: undefined
};

export default OverlayMenu;
