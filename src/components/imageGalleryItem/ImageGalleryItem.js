import React from "react";
import PropTypes from "prop-types";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ src, onOpen, id }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={src}
      alt=""
      className={styles.ImageGalleryItemImage}
      onClick={onOpen}
      id={id}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired
};

export default ImageGalleryItem;
