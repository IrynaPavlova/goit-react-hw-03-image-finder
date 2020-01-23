import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ onLoad }) => (
  <button className={styles.Button} onClick={onLoad}>
    Load more
  </button>
);

Button.propTypes = {
  onLoad: PropTypes.func.isRequired
};

export default Button;
