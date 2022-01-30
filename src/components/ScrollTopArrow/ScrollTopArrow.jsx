import React from "react";
import styles from "./ScrollTopArrow.module.css";
import PropTypes from "prop-types";

export default function ScrollTopArrow({ color, bgColor, borderRadius }) {
  return (
    <div
      onClick={() =>
       { document.querySelector('.main').scrollTo({
          top: 0,
          behavior: "smooth",
       })
      console.log('first');}
      }
      className={styles.arrow}
      style={{
        backgroundColor: bgColor,
        borderRadius: borderRadius,
      }}
    >
      <span style={{ color: color, fontSize: "42px" }} className="material-icons">
        expand_less
      </span>
    </div>
  );
}

ScrollTopArrow.defaultProps = {
  color: "#fff",
  bgColor: "#333",
  borderRadius: "50%",
};

ScrollTopArrow.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
};
